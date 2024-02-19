import antlr4, {CommonTokenStream} from "antlr4";
import XpressionLexer from "./grammar/XpressionLexer.js";
import XpressGrammarVisitor from "./grammar/XpressGrammarVisitor.js";
import XpressGrammar from "./grammar/XpressGrammar.js";
import {Result} from "./Result.js";

class XpressVisitor extends XpressGrammarVisitor {
    visitEvaluateExpression(ctx) {
        return super.visitEvaluateExpression(ctx.expression());
    }

    visitIdentifier(ctx) {
        return super.visitIdentifier(ctx);
    }

    visitNullExpression(ctx) {
        const result = Result.Value(null, Result.Type.NONE);
        console.log('visitBooleanExpression', result)
        return result
    }

    visitBooleanExpression(ctx) {
        const result = Result.Value(Boolean(ctx.getText()), Result.Type.BOOLEAN);
        console.log('visitBooleanExpression', result)
        return result
    }

    visitPositiveNumber(ctx) {
        const result = Result.Value(Number(ctx.getText()), Result.Type.NUMBER);
        console.log('visitPositiveNumber', result)
        return result
    }

    visitNegativeNumber(ctx) {
        const result = Result.Value(Number(ctx.getText()), Type.NUMBER);
        console.log('visitNegativeNumber', result)
        return result
    }
}

class Xpress {

    constructor(expression) {
        this.expression = expression
        const chars = new antlr4.InputStream(this.expression);
        const lexer = new XpressionLexer(chars);
        lexer.strictMode = false; // do not use js strictMode
        const tokens = new CommonTokenStream(lexer);
        const grammar = new XpressGrammar(tokens)
        this.root = grammar.root()
    }

    evaluate = (context) => {
        const visitor = new XpressVisitor(/*pass arguments and context*/);
        return visitor.visitEvaluateExpression(this.root)
    }
}

export {Xpress}
