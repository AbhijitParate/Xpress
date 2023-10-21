package com.xpress.xpressor

import com.google.gson.Gson
import com.xpress.xpressor.Component.Statement
import com.xpress.xpressor.internal.Xpress.*
import com.xpress.xpressor.internal.Xpress.CommentStatemtentContext
import com.xpress.xpressor.internal.Xpress.FunctionContext
import com.xpress.xpressor.internal.Xpress.ImportsContext
import com.xpress.xpressor.internal.Xpress.StatementBlackContext
import com.xpress.xpressor.internal.XpressBaseVisitor

class Visitor(val gson: Gson) : XpressBaseVisitor<Component>() {

    override fun visitConfigRoot(ctx: ConfigRootContext): Component {
        return Component.XpressConfig(ctx.config().map { visit(it) as Component.Config })
    }

    override fun visitCommentConfig(ctx: CommentConfigContext): Component.Config.Comment {
        return Component.Config.Comment(ctx.comment().text)
    }

    override fun visitImportConfig(ctx: ImportConfigContext): Component.Config.Import {
        return super.visitImportConfig(ctx) as Component.Config.Import
    }

    override fun visitImports(ctx: ImportsContext): Component.Config.Import {
        val path = ctx.path.text
        val imports = ctx.MUL()?.text ?: ctx.IDENTIFIER()?.text
        return Component.Config.Import(path, imports)
    }

    override fun visitFunction(ctx: FunctionContext): Component.Config.Function {
        val name = ctx.name.text
        val variables = ctx.variable().map { visit(it) as Component.Variable }
        val block = visit(ctx.body) as Component.StatementBlock
        return Component.Config.Function(name, variables, block)
    }

    override fun visitStatementBlack(ctx: StatementBlackContext): Component.StatementBlock {
        return Component.StatementBlock(ctx.statement().map { visit(it) as Statement })
    }

    override fun visitCommentStatemtent(ctx: CommentStatemtentContext): Statement.Comment {
        val comment = visit(ctx.comment()) as Component.Config.Comment
        return Statement.Comment(comment.comment)
    }

    override fun visitAssignmentStatemtent(ctx: AssignmentStatemtentContext): Statement.Assignable {
        return super.visitAssignmentStatemtent(ctx) as Statement.Assignable
    }


    override fun visitVariableWithXpression(ctx: VariableWithXpressionContext): Statement.Assignable.Expression {
        return Statement.Assignable.Expression(
            variable = visit(ctx.variable()) as Component.Variable,
            expression = visit(ctx.xpression()) as Component.Xpression
        )
    }

    override fun visitVariableWithObject(ctx: VariableWithObjectContext): Statement.Assignable.Object {
        return Statement.Assignable.Object(
            variable = visit(ctx.variable()) as Component.Variable,
            crudable = visit(ctx.crudable()) as Statement.Crudable
        )
    }

    override fun visitVariableWithAction(ctx: VariableWithActionContext): Statement.Assignable.Action {
        return Statement.Assignable.Action(
            variable = visit(ctx.variable()) as Component.Variable,
            actionable = visit(ctx.actionable()) as Statement.Actionable
        )
    }

    override fun visitConditionalStatemtent(ctx: ConditionalStatemtentContext?): Statement.Conditional {
        return super.visitConditionalStatemtent(ctx) as Statement.Conditional
    }

    override fun visitIfElse(ctx: IfElseContext): Statement.Conditional {
        val conditions = mutableListOf<Pair<Component.Xpression, Component.StatementBlock>>()
        ctx.xpression().mapIndexed { index, xpressionContext ->
            conditions.add(
                Pair(
                    visit(xpressionContext) as Component.Xpression,
                    visit(ctx.statementBlack(index)) as Component.StatementBlock
                )
            )
        }
        val default = visit(ctx.elseBlock) as Component.StatementBlock
        return Statement.Conditional(conditions, default)
    }

    override fun visitSwitch(ctx: SwitchContext): Statement.Conditional {
        val conditions = mutableListOf<Pair<Component.Xpression, Component.StatementBlock>>()
        ctx.xpression().mapIndexed { index, xpressionContext ->
            conditions.add(
                Pair(
                    visit(xpressionContext) as Component.Xpression,
                    visit(ctx.statementBlack(index)) as Component.StatementBlock
                )
            )
        }
        val default = visit(ctx.defaultBlock) as Component.StatementBlock
        return Statement.Conditional(conditions, default)
    }

    override fun visitIterableStatemtent(ctx: IterableStatemtentContext?): Statement.Iterable {
        return super.visitIterableStatemtent(ctx) as Statement.Iterable
    }

    override fun visitIterateFields(ctx: IterateFieldsContext): Statement.Iterable {
        return Statement.Iterable(
            parameters = ctx.parameter().map { visit(it) as Component.Parameter },
            expression = visit(ctx.xpression()) as Component.Xpression,
            block = visit(ctx.statementBlack()) as Component.StatementBlock,
            regex = ctx.regex.text
        )
    }

    override fun visitIterateArray(ctx: IterateArrayContext): Statement.Iterable {
        return Statement.Iterable(
            parameters = ctx.parameter().map { visit(it) as Component.Parameter },
            expression = visit(ctx.xpression()) as Component.Xpression,
            block = visit(ctx.statementBlack()) as Component.StatementBlock
        )
    }

    override fun visitCrudableStatement(ctx: CrudableStatementContext?): Statement.Crudable {
        return super.visitCrudableStatement(ctx) as Statement.Crudable
    }

    override fun visitCreateEntity(ctx: CreateEntityContext): Statement.Crudable.Create {
        return Statement.Crudable.Create(visit(ctx.metadata()) as Component.Metadata)
    }

    override fun visitEditEntity(ctx: EditEntityContext): Component {
        return Statement.Crudable.Edit(
            visit(ctx.xpression()) as Component.Xpression,
            visit(ctx.metadata()) as Component.Metadata
        )
    }

    override fun visitDeleteEntity(ctx: DeleteEntityContext): Component {
        return Statement.Crudable.Delete(
            visit(ctx.xpression()) as Component.Xpression,
            visit(ctx.metadata()) as Component.Metadata
        )
    }

    override fun visitViewEntity(ctx: ViewEntityContext): Component {
        return Statement.Crudable.View(
            visit(ctx.xpression()) as Component.Xpression,
            visit(ctx.metadata()) as Component.Metadata
        )
    }

    override fun visitViewData(ctx: ViewDataContext): Statement.Crudable.View {
        return Statement.Crudable.View(null, visit(ctx.metadata()) as Component.Metadata)
    }

    override fun visitMetadata(ctx: MetadataContext?): Component {
        return super.visitMetadata(ctx)
    }

    override fun visitTextElement(ctx: TextElementContext): Component.Metadata.Value {
        return Component.Metadata.Value.Text(
            name = ctx.name.text,
            value = ctx.TEXT().text
        )
    }

    override fun visitNameElement(ctx: NameElementContext): Component.Metadata.Value {
        return Component.Metadata.Value.Name(
            name = ctx.name.text,
            value = ctx.IDENTIFIER(1).text
        )
    }

    override fun visitBlockElement(ctx: BlockElementContext): Component.Metadata.Value.Block {
        return Component.Metadata.Value.Block(
            ctx.name.text,
            (visit(ctx.metadataBlock()) as Component.Metadata.Values).values
        )
    }

    override fun visitMetadataBlock(ctx: MetadataBlockContext): Component.Metadata.Values {
        return Component.Metadata.Values(
            ctx.IDENTIFIER().map { it.text }
                .mapIndexed { index, name ->
                    Component.Metadata.Xpression(
                        name,
                        visit(ctx.xpression(index)) as Component.Xpression
                    )
                }
        )
    }

    override fun visitActionableStatement(ctx: ActionableStatementContext): Statement.Actionable {
        return super.visitActionableStatement(ctx) as Statement.Actionable
    }

    override fun visitExternalAction(ctx: ExternalActionContext): Statement.Actionable.External {
        return Statement.Actionable.External(
            path = ctx.actionPath.text
        )
    }

    override fun visitFunctionCall(ctx: FunctionCallContext): Statement.Actionable.Execute {
        return Statement.Actionable.Execute(
            name = ctx.name.text,
            parameters = visit(ctx.parameters()) as Component.Parameters
        )
    }

    override fun visitInlineFunctionCall(ctx: InlineFunctionCallContext): Statement.Actionable.ExecuteInline {
        return Statement.Actionable.ExecuteInline(
            parameters = visit(ctx.parameters()) as Component.Parameters,
            block = visit(ctx.statementBlack()) as Component.StatementBlock
        )
    }

    override fun visitReturnStatement(ctx: ReturnStatementContext?): Statement.Return {
        return super.visitReturnStatement(ctx) as Statement.Return
    }

    override fun visitReturn(ctx: ReturnContext): Statement.Return {
        return Statement.Return(visit(ctx.xpression()) as Component.Xpression)
    }

    override fun visitParameters(ctx: ParametersContext): Component.Parameters {
        return Component.Parameters(
            parameters = ctx.parameter().map { visit(it) as Component.Parameter }
        )
    }

    override fun visitValueParameter(ctx: ValueParameterContext): Component.Parameter {
        return Component.Parameter.Value(
            name = ctx.name.text,
            value = ctx.value.text
        )
    }

    override fun visitXpressionParameter(ctx: XpressionParameterContext): Component.Parameter {
        return Component.Parameter.Expression(
            name = ctx.name.text,
            expression = visit(ctx.xpression()) as Component.Xpression
        )
    }

    override fun visitXpression(ctx: XpressionContext): Component {
        return Component.Xpression(
            expression = ctx.expression().text
        )
    }

    override fun visitVariable(ctx: VariableContext): Component {
        return Component.Variable(
            name = ctx.name.text,
            type = ctx.type.text
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