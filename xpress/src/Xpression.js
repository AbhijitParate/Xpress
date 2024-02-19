import antlr4, {CommonTokenStream} from "antlr4";
import XpressionLexer from "./grammar/XpressionLexer.js";
import XpressionGrammarVisitor from "./grammar/XpressionGrammarVisitor.js";
import XpressionGrammar from "./grammar/XpressionGrammar.js";
import {Result} from "./Result.js";
import unescape from "lodash.unescape"

class Xpression {

    constructor(root) {
        this.root = root
    }

    static from(string) {
        const chars = new antlr4.InputStream(string);
        const lexer = new XpressionLexer(chars);
        lexer.strictMode = false; // do not use js strictMode
        const tokens = new CommonTokenStream(lexer);
        const tree = new XpressionGrammar(tokens)
        return new Xpression(tree.root())
    }

    static evaluate(xpression, context) {
        if (xpression instanceof Xpression) {
            return XpressionVisitor.visitRoot(xpression);
        }
        return Result.Error("xpression is not root")
    }
}

class XpressionVisitor extends XpressionGrammarVisitor {

    static visitRoot = (configRoot) => {
        const visitor = new XpressionVisitor();
        // TODO: set context here
        return visitor.visitEvaluateExpression(configRoot.root)
    }

    visitEvaluateExpression(ctx) {
        return this.visit(ctx.expression())
    }

    visitInfixExpression_Ignored(ctx) {
        return super.visitInfixExpression_Ignored(ctx)[0];
    }

    visitScopedExpression_Ignored(ctx) {
        return super.visitScopedExpression_Ignored(ctx)[0];
    }

    visitRoundBracketExpression(ctx) {
        let expression = ctx.root.infixExpression();
        return this.visit(expression)[0]
    }

    visitSquareBracketExpression(ctx) {
        let expression = ctx.root.infixExpression();
        return this.visit(expression)[0]
    }

    visitCurlyBracketExpression(ctx) {
        let expression = ctx.root.infixExpression();
        return this.visit(expression)[0]
    }

    visitLogicalExpression_Ignored(ctx) {
        return super.visitLogicalExpression_Ignored(ctx)[0];
    }

    visitTernaryExpression_Ignored(ctx) {
        return super.visitTernaryExpression_Ignored(ctx)[0];
    }

    visitTernaryExpression(ctx) {
        let condition = ctx.root.logical(0);
        let ifTrue = ctx.root.logical(1);
        let ifFalse = ctx.root.logical(2);
        return {value: condition ? ifTrue : ifFalse, type: Result.Type.BOOLEAN}
    }

    visitEqualityExpression_Ignored(ctx) {
        return super.visitEqualityExpression_Ignored(ctx)[0];
    }

    visitLogicalExpressionNot(ctx) {
        let result = this.visit(ctx.root.logical());
        return {value: !result.value, type: Result.Type.BOOLEAN}
    }

    visitLogicalExpressionAnd(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        if (left.type === Result.Type.BOOLEAN && right.type === Result.Type.BOOLEAN) {
            return {value: left.value && right.value, type: Result.Type.BOOLEAN}
        }
        return Result.Error("Unsupported operation.")
    }

    visitLogicalExpressionOr(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        if (left.type === Result.Type.BOOLEAN && right.type === Result.Type.BOOLEAN) {
            return {value: left.value || right.value, type: Result.Type.BOOLEAN}
        }
        return Result.Error("Unsupported operation.")
    }

    visitComparisonExpression_Ignored(ctx) {
        return super.visitComparisonExpression_Ignored(ctx)[0];
    }

    visitEqualityExpressionEqualTo(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        return {value: left.value || right.value, type: Result.Type.BOOLEAN}
    }

    visitEqualityExpressionNotEqualTo(ctx) {
        let left = this.visit(ctx.left);
        let right = this.visit(ctx.right);
        return {value: left.value === right.value, type: Result.Type.BOOLEAN}
    }

    visitAdditionExpression_Ignored(ctx) {
        return super.visitAdditionExpression_Ignored(ctx)[0];
    }

    visitComparisonExpressionLessThan(ctx) {
        let left = this.visit(ctx.left);
        let right = this.visit(ctx.right);
        return {value: left.value < right.value, type: Result.Type.BOOLEAN}
    }

    visitComparisonExpressionLessThanOrEqual(ctx) {
        let left = this.visit(ctx.left);
        let right = this.visit(ctx.right);
        return {value: left.value <= right.value, type: Result.Type.BOOLEAN}
    }

    visitComparisonExpressionGreaterThan(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        return {value: left.value > right.value, type: Result.Type.BOOLEAN}
    }

    visitComparisonExpressionGreaterThanOrEqual(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        return {value: left.value >= right.value, type: Result.Type.BOOLEAN}
    }

    visitMultiplicationExpression_Ignored(ctx) {
        return super.visitMultiplicationExpression_Ignored(ctx)[0];
    }

    visitAdditionExpression(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        // console.log(left)
        // console.log(right)
        if (left.type === Result.Type.NUMBER && right.type === Result.Type.NUMBER) {
            return {value: left.value + right.value, type: Result.Type.NUMBER}
        } else if (left.type === Result.Type.TEXT && right.type === Result.Type.TEXT) {
            return {value: left.value + right.value, type: Result.Type.TEXT}
        }
        return Result.Error("Unsupported Operation.", ctx.getText())
    }

    visitSubtractionExpression(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        return {value: left.value - right.value, type: Result.Type.BOOLEAN}
    }

    visitExponentiationExpression_Ignored(ctx) {
        return super.visitExponentiationExpression_Ignored(ctx)[0];
    }

    visitMultiplicationExpression(ctx) {
        let left = this.visit(ctx.left);
        let right = this.visit(ctx.right);
        return {value: left.value * right.value, type: Result.Type.BOOLEAN}
    }

    visitDivisionExpression(ctx) {
        let left = this.visit(ctx.left);
        let right = this.visit(ctx.right);
        return {value: left.value / right.value, type: Result.Type.BOOLEAN}
    }

    visitModulousExpression(ctx) {
        let left = this.visit(ctx.left);
        let right = this.visit(ctx.right);
        return {value: left.value % right.value, type: Result.Type.BOOLEAN}
    }

    visitOperationExpression_Ignored(ctx) {
        // console.log(ctx)
        return super.visitOperationExpression_Ignored(ctx)[0];
    }

    visitExponentiationExpression(ctx) {
        let left = this.visit(ctx.left)[0];
        let right = this.visit(ctx.right)[0];
        return {value: left.value ^ right.value, type: Result.Type.BOOLEAN}
    }

    visitAccessorExpression(ctx) {
        return {accessor: ctx.getText()}
    }

    visitFunction(ctx) {
        let functionName = this.visit(ctx.functionName)[0];
        // console.log(functionName)
        // console.log(ctx.expressions)
        return {function: ctx.functionName()}
    }

    visitObjectAccessor(ctx) {
        return super.visitObjectAccessor(ctx)[0];
    }

    visitPropertyAccessor(ctx) {
        return {accessor: ctx.getText()}
    }

    visitSubscriptAccessor(ctx) {
        return {accessor: ctx.getText()}
    }

    visitIdentifier(ctx) {
        return {id: ctx.getText()}
    }

    visitBooleanExpression(ctx) {
        return {value: Boolean(ctx.getText()), type: Result.Type.BOOLEAN}
    }

    visitNullExpression(ctx) {
        return {value: null, type: Result.Type.NONE}
    }

    visitTextExpression(ctx) {
        let textValue = JSON.parse(ctx.getText());
        return {value: String(textValue), type: Result.Type.TEXT}
    }

    visitNumberExpression(ctx) {
        return super.visitNumberExpression(ctx)[0];
    }

    visitPositiveNumber(ctx) {
        return {value: Number(ctx.getText()), type: Result.Type.NUMBER}
    }

    visitNegativeNumber(ctx) {
        return {value: Number(ctx.getText()), type: Result.Type.NUMBER}
    }

}

export {Xpression}
