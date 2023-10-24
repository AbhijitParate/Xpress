package com.xpress.config

import com.xpress.config.Component.Argument
import com.xpress.config.Component.Parameter
import com.xpress.config.Component.Parameters
import com.xpress.config.Component.Xpression
import com.xpress.config.internal.Xpress
import com.xpress.config.internal.Xpress.ActionableStatementContext
import com.xpress.config.internal.Xpress.AssignmentStatemtentContext
import com.xpress.config.internal.Xpress.BlockElementContext
import com.xpress.config.internal.Xpress.CommentConfigContext
import com.xpress.config.internal.Xpress.CommentStatemtentContext
import com.xpress.config.internal.Xpress.ConditionalStatemtentContext
import com.xpress.config.internal.Xpress.ConfigRootContext
import com.xpress.config.internal.Xpress.CreateEntityContext
import com.xpress.config.internal.Xpress.CrudableStatementContext
import com.xpress.config.internal.Xpress.DeleteEntityContext
import com.xpress.config.internal.Xpress.EditEntityContext
import com.xpress.config.internal.Xpress.ExternalActionContext
import com.xpress.config.internal.Xpress.FunctionCallContext
import com.xpress.config.internal.Xpress.FunctionContext
import com.xpress.config.internal.Xpress.IfElseContext
import com.xpress.config.internal.Xpress.ImportConfigContext
import com.xpress.config.internal.Xpress.ImportsContext
import com.xpress.config.internal.Xpress.InlineFunctionCallContext
import com.xpress.config.internal.Xpress.IterableStatemtentContext
import com.xpress.config.internal.Xpress.IterateArrayContext
import com.xpress.config.internal.Xpress.IterateFieldsContext
import com.xpress.config.internal.Xpress.MetadataBlockContext
import com.xpress.config.internal.Xpress.MetadataContext
import com.xpress.config.internal.Xpress.MultiLineCommentContext
import com.xpress.config.internal.Xpress.ParametersContext
import com.xpress.config.internal.Xpress.ReturnContext
import com.xpress.config.internal.Xpress.ReturnStatementContext
import com.xpress.config.internal.Xpress.SingleLineCommentContext
import com.xpress.config.internal.Xpress.StatementBlackContext
import com.xpress.config.internal.Xpress.SwitchContext
import com.xpress.config.internal.Xpress.TextElementContext
import com.xpress.config.internal.Xpress.VariableContext
import com.xpress.config.internal.Xpress.VariableWithActionContext
import com.xpress.config.internal.Xpress.VariableWithObjectContext
import com.xpress.config.internal.Xpress.VariableWithXpressionContext
import com.xpress.config.internal.Xpress.ViewDataContext
import com.xpress.config.internal.Xpress.ViewEntityContext
import com.xpress.config.internal.Xpress.XpressionContext
import com.xpress.config.internal.Xpress.XpressionParameterContext
import com.xpress.config.internal.XpressBaseVisitor

class Visitor : XpressBaseVisitor<Config>() {

    override fun visitConfigRoot(ctx: ConfigRootContext): XpressConfig {
        return XpressConfig(ctx.config().map { visit(it) as Config })
    }

    override fun visitCommentConfig(ctx: CommentConfigContext): Config.Comment {
        return Config.Comment(ctx.comment().text)
    }

    override fun visitImportConfig(ctx: ImportConfigContext): Config.Import {
        return super.visitImportConfig(ctx) as Config.Import
    }

    override fun visitImports(ctx: ImportsContext): Config.Import {
        val path = ctx.path.text
        val imports = ctx.MUL()?.text ?: ctx.IDENTIFIER()?.text
        return Config.Import(path, imports)
    }

    override fun visitFunction(ctx: FunctionContext): Config.Function {
        val name = ctx.name.text
        val arguments = ctx.variable().map { visit(it) as Argument }
        val block = visit(ctx.body) as ActionBlock
        return Config.Function(name, arguments, block)
    }

    override fun visitStatementBlack(ctx: StatementBlackContext): ActionBlock {
        return ActionBlock(ctx.statement().map { visit(it) as Action })
    }

    override fun visitCommentStatemtent(ctx: CommentStatemtentContext): Action.Comment {
        val comment = visit(ctx.comment()) as Config.Comment
        return Action.Comment(comment.comment)
    }

    override fun visitAssignmentStatemtent(ctx: AssignmentStatemtentContext): Action.Assignable {
        return super.visitAssignmentStatemtent(ctx) as Action.Assignable
    }

    override fun visitVariableWithXpression(ctx: VariableWithXpressionContext): Action.Assignable.Expression {
        return Action.Assignable.Expression(
            argument = visit(ctx.variable()) as Argument,
            xpression = visit(ctx.xpression()) as Xpression
        )
    }

    override fun visitVariableWithObject(ctx: VariableWithObjectContext): Action.Assignable.Object {
        return Action.Assignable.Object(
            argument = visit(ctx.variable()) as Argument,
            crudable = visit(ctx.crudable()) as Action.Crudable
        )
    }

    override fun visitVariableWithAction(ctx: VariableWithActionContext): Action.Assignable.Action {
        return Action.Assignable.Action(
            argument = visit(ctx.variable()) as Argument,
            actionable = visit(ctx.actionable()) as Action.Actionable
        )
    }

    override fun visitConditionalStatemtent(ctx: ConditionalStatemtentContext?): Action.Conditional {
        return super.visitConditionalStatemtent(ctx) as Action.Conditional
    }

    override fun visitIfElse(ctx: IfElseContext): Action.Conditional {
        val conditions = mutableListOf<Pair<Xpression, ActionBlock>>()
        ctx.xpression().mapIndexed { index, xpressionContext ->
            conditions.add(
                Pair(
                    visit(xpressionContext) as Xpression,
                    visit(ctx.statementBlack(index)) as ActionBlock
                )
            )
        }
        val default = visit(ctx.elseBlock) as ActionBlock
        return Action.Conditional(conditions, default)
    }

    override fun visitSwitch(ctx: SwitchContext): Action.Conditional {
        val conditions = mutableListOf<Pair<Xpression, ActionBlock>>()
        ctx.xpression().mapIndexed { index, xpressionContext ->
            conditions.add(
                Pair(
                    visit(xpressionContext) as Xpression,
                    visit(ctx.statementBlack(index)) as ActionBlock
                )
            )
        }
        val default = visit(ctx.defaultBlock) as ActionBlock
        return Action.Conditional(conditions, default)
    }

    override fun visitIterableStatemtent(ctx: IterableStatemtentContext?): Action.Iterable {
        return super.visitIterableStatemtent(ctx) as Action.Iterable
    }

    override fun visitIterateFields(ctx: IterateFieldsContext): Action.Iterable {
        return Action.Iterable(
            parameters = ctx.parameter().map { visit(it) as Parameter },
            expression = visit(ctx.xpression()) as Xpression,
            block = visit(ctx.statementBlack()) as ActionBlock,
            regex = ctx.regex.text
        )
    }

    override fun visitIterateArray(ctx: IterateArrayContext): Action.Iterable {
        return Action.Iterable(
            parameters = ctx.parameter().map { visit(it) as Parameter },
            expression = visit(ctx.xpression()) as Xpression,
            block = visit(ctx.statementBlack()) as ActionBlock
        )
    }

    override fun visitCrudableStatement(ctx: CrudableStatementContext?): Action.Crudable {
        return super.visitCrudableStatement(ctx) as Action.Crudable
    }

    override fun visitCreateEntity(ctx: CreateEntityContext): Action.Crudable.Create {
        return Action.Crudable.Create(visit(ctx.metadata()) as Component.Metadata)
    }

    override fun visitEditEntity(ctx: EditEntityContext): Config {
        return Action.Crudable.Edit(
            visit(ctx.xpression()) as Xpression,
            visit(ctx.metadata()) as Component.Metadata
        )
    }

    override fun visitDeleteEntity(ctx: DeleteEntityContext): Config {
        return Action.Crudable.Delete(
            visit(ctx.xpression()) as Xpression,
            visit(ctx.metadata()) as Component.Metadata
        )
    }

    override fun visitViewEntity(ctx: ViewEntityContext): Config {
        return Action.Crudable.View(
            visit(ctx.xpression()) as Xpression,
            visit(ctx.metadata()) as Component.Metadata
        )
    }

    override fun visitViewData(ctx: ViewDataContext): Action.Crudable.View {
        return Action.Crudable.View(null, visit(ctx.metadata()) as Component.Metadata)
    }

    override fun visitMetadata(ctx: MetadataContext): Component.Metadata {
        return super.visit(ctx.metadataBlock()) as Component.Metadata
    }

    override fun visitMetadataBlock(ctx: MetadataBlockContext): Component.Metadata.Values {
        return Component.Metadata.Values(
            ctx.metadatAssignment().map { visit(it) as Component.Metadata.Value }
        )
    }

    override fun visitMetadatAssignment(ctx: Xpress.MetadatAssignmentContext): Component.Metadata.Value {
        return Component.Metadata.Value(
            ctx.IDENTIFIER().text,
            visit(ctx.metadataElement()) as Component.Metadata.Element
        )
    }

    override fun visitTextElement(ctx: TextElementContext): Component.Metadata.Text {
        return Component.Metadata.Text(value = ctx.TEXT().text)
    }

    override fun visitXpressionElement(ctx: Xpress.XpressionElementContext): Component.Metadata.Xpression {
        return Component.Metadata.Xpression(value = ctx.xpression().text)
    }

    override fun visitBlockElement(ctx: BlockElementContext): Component.Metadata.Values {
        return visit(ctx.metadataBlock()) as Component.Metadata.Values
    }

    override fun visitActionableStatement(ctx: ActionableStatementContext): Action.Actionable {
        return super.visitActionableStatement(ctx) as Action.Actionable
    }

    override fun visitExternalAction(ctx: ExternalActionContext): Action.Actionable.External {
        return Action.Actionable.External(
            path = ctx.actionPath.text
        )
    }

    override fun visitFunctionCall(ctx: FunctionCallContext): Action.Actionable.Execute {
        return Action.Actionable.Execute(
            name = ctx.name.text,
            parameters = visit(ctx.parameters()) as Parameters
        )
    }

    override fun visitInlineFunctionCall(ctx: InlineFunctionCallContext): Action.Actionable.ExecuteInline {
        return Action.Actionable.ExecuteInline(
            parameters = visit(ctx.parameters()) as Parameters,
            block = visit(ctx.statementBlack()) as ActionBlock
        )
    }

    override fun visitReturnStatement(ctx: ReturnStatementContext?): Action.Return {
        return super.visitReturnStatement(ctx) as Action.Return
    }

    override fun visitReturn(ctx: ReturnContext): Action.Return {
        return Action.Return(visit(ctx.xpression()) as Xpression)
    }

    override fun visitParameters(ctx: ParametersContext): Parameters {
        return Parameters(
            parameters = ctx.parameter().map { visit(it) as Parameter }
        )
    }

    override fun visitXpressionParameter(ctx: XpressionParameterContext): Parameter {
        return Parameter.Expression(
            name = ctx.name.text,
            expression = visit(ctx.xpression()) as Xpression
        )
    }

    override fun visitXpression(ctx: XpressionContext): Component {
        return Xpression(
            expression = ctx.expression().text
        )
    }

    override fun visitVariable(ctx: VariableContext): Component {
        return Argument(
            name = ctx.name.text,
            type = ctx.type?.text.orEmpty()
        )
    }

    override fun visitSingleLineComment(ctx: SingleLineCommentContext): Component {
        return Component.Comment(
            comment = ctx.SingleLineComment().text
        )
    }

    override fun visitMultiLineComment(ctx: MultiLineCommentContext): Component {
        return Component.Comment(
            comment = ctx.MultiLineComment().text
        )
    }
}