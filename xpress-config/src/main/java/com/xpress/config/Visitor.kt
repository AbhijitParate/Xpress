package com.xpress.config

import com.xpress.config.Action.Controllable.*
import com.xpress.config.Component.*
import com.xpress.config.internal.Xpress.*
import com.xpress.config.internal.XpressBaseVisitor

class Visitor : XpressBaseVisitor<Config>() {

    override fun visitConfigRoot(ctx: ConfigRootContext): XpressConfig {
        return XpressConfig(ctx.config().map { visit(it) as Config })
    }

    override fun visitCommentConfig(ctx: CommentConfigContext): Config.Comment {
        val comment = visit(ctx.comment()) as Component.Comment
        return Config.Comment(comment.comment)
    }

    override fun visitImportConfig(ctx: ImportConfigContext): Config.Import {
        return visit(ctx.imports()) as Config.Import
    }

    override fun visitImports(ctx: ImportsContext): Config.Import {
        val path = ctx.path.text
        val imports = ctx.MUL()?.text ?: ctx.IDENTIFIER()?.text
        return Config.Import(path, imports)
    }

    override fun visitFunction(ctx: FunctionContext): Config.Function {
        val name = ctx.name.text
        val arguments = visit(ctx.arguments()) as Arguments
        val block = visit(ctx.body) as ActionBlock
        return Config.Function(name, arguments, block)
    }

    override fun visitArguments(ctx: ArgumentsContext): Config {
        return Arguments(ctx.variable().map { visit(it) as Argument })
    }

    override fun visitActionBlack(ctx: ActionBlackContext): ActionBlock {
        return ActionBlock(ctx.action().map { visit(it) as Action })
    }

    override fun visitCommentAction(ctx: CommentActionContext): Config {
        val comment = visit(ctx.comment()) as Component.Comment
        return Action.Comment(comment.comment)
    }

    override fun visitAssignmentAction(ctx: AssignmentActionContext): Config {
        return visit(ctx.assignable())
    }

    override fun visitConditionalAction(ctx: ConditionalActionContext): Config {
        return visit(ctx.conditional())
    }

    override fun visitIterableAction(ctx: IterableActionContext): Config {
        return visit(ctx.iterable())
    }

    override fun visitActionableAction(ctx: ActionableActionContext): Config {
        return visit(ctx.actionable())
    }

    override fun visitControllableAction(ctx: ControllableActionContext): Config {
        return visit(ctx.controllable())
    }

    override fun visitAssignExpression(ctx: AssignExpressionContext): Config {
        return Action.Assignable.Expression(
            variable = visit(ctx.variable()) as Argument,
            xpression = visit(ctx.xpression()) as Xpression
        )
    }

    override fun visitAssignActionable(ctx: AssignActionableContext): Config {
        return Action.Assignable.Function(
            variable = visit(ctx.variable()) as Argument,
            actionable = visit(ctx.actionable()) as Action.Actionable
        )
    }

    override fun visitFunctionCall(ctx: FunctionCallContext): Action.Actionable.Function {
        return Action.Actionable.Function(
            name = ctx.name.text,
            parameters = visit(ctx.parameters()) as Parameters
        )
    }

    override fun visitInlineFunctionCall(ctx: InlineFunctionCallContext): Action.Actionable.InlineFunction {
        return Action.Actionable.InlineFunction(
            name = ctx.name.text,
            parameters = visit(ctx.parameters()) as Parameters,
            block = visit(ctx.actionBlack()) as ActionBlock
        )
    }

    override fun visitParameters(ctx: ParametersContext): Parameters {
        return Parameters(
            parameters = ctx.parameter().map { visit(it) as Parameter }
        )
    }

    override fun visitTextParameter(ctx: TextParameterContext): Config {
        return Parameter.Value(
            name = ctx.name.text,
            value = ctx.value.text
        )
    }

    override fun visitXpressionParameter(ctx: XpressionParameterContext): Parameter {
        return Parameter.Expression(
            name = ctx.name.text,
            expression = visit(ctx.xpression()) as Xpression
        )
    }

    override fun visitConditional(ctx: ConditionalContext?): Config {
        return super.visitConditional(ctx)
    }

    override fun visitIfElse(ctx: IfElseContext): Action.Conditional {
        val conditions = mutableListOf<Pair<Xpression, ActionBlock>>()
        ctx.xpression().mapIndexed { index, xpressionContext ->
            conditions.add(
                Pair(
                    visit(xpressionContext) as Xpression,
                    visit(ctx.actionBlack(index)) as ActionBlock
                )
            )
        }
        val default = visit(ctx.elseBlock) as ActionBlock
        return Action.Conditional(conditions = conditions, default = default)
    }

    override fun visitSwitch(ctx: SwitchContext): Action.Conditional {
        val conditions = mutableListOf<Pair<Xpression, ActionBlock>>()
        ctx.xpression().mapIndexed { index, xpressionContext ->
            conditions.add(
                Pair(
                    visit(xpressionContext) as Xpression,
                    visit(ctx.actionBlack(index)) as ActionBlock
                )
            )
        }
        val default = visit(ctx.defaultBlock) as ActionBlock
        return Action.Conditional(conditions, default)
    }

    override fun visitIterable(ctx: IterableContext): Config {
        return Action.Iterable(
            parameters = visit(ctx.parameters()) as Parameters,
            expression = visit(ctx.xpression()) as Xpression,
            block = visit(ctx.actionBlack()) as ActionBlock
        )
    }

    override fun visitReturn(ctx: ReturnContext): Return {
        return Return(visit(ctx.xpression()) as Xpression)
    }

    override fun visitBreak(ctx: BreakContext?): Break {
        return Break
    }

    override fun visitContinue(ctx: ContinueContext?): Config {
        return Continue
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