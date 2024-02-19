import XpressGrammarVisitor from "../grammar/XpressGrammarVisitor.js";
import antlr4, {CommonTokenStream} from "antlr4";
import XpressionLexer from "../grammar/XpressionLexer.js";
import XpressGrammar from "../grammar/XpressGrammar.js";

class XpressConfig {
    static from(config) {
        const chars = new antlr4.InputStream(config);
        const lexer = new XpressionLexer(chars);
        lexer.strictMode = false; // do not use js strictMode
        const tokens = new CommonTokenStream(lexer);
        const grammar = new XpressGrammar(tokens)
        const configRoot = grammar.configRoot();
        return XpressVisitor.visitRoot(configRoot);
    }
}

const Component = {
    COMMENT: 'comment',
    FUNCTION: 'function',
    RETURN: 'return',
    ACTION: 'action'
}

class XpressVisitor extends XpressGrammarVisitor {

    static visitRoot = (configRoot) => {
        const visitor = new XpressVisitor();
        return visitor.visitConfigRoot(configRoot)
    }

    visitConfigRoot(ctx) {
        return []
    }

    visitFunction(ctx) {
        return {
            type: Component.FUNCTION,
            name: ctx.name.text,
            arguments: this.visitArguments(ctx.arguments),
            actions: this.visitActionBlack(ctx.body)
        }
    }

    visitArguments(ctx) {
        return ctx.variables?.map(variable => {
            return this.visitVariable(variable)
        })
    }

    visitVariable(ctx) {
        return {
            name: ctx.getText(),
            type: Component.valueOf(ctx.type)
        }
    }

    visitReturn(ctx) {
        return {
            type: Component.RETURN,
            xpression: ctx.xpression.text
        }
    }

    visitSingleLineComment(ctx) {
        return {
            type: Component.COMMENT,
            comment: ctx.getText().replace("// ", '')
        }
    }

    visitMultiLineComment(ctx) {
        return {
            type: Component.COMMENT,
            comment: ctx.getText().replace("/* ", '').replace('*/', '')
        }
    }

}

export {XpressConfig, Component}
