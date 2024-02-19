// Generated from /Users/abhijit/WebstormProjects/xpress-react/xpress/grammar/XpressionGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import XpressionGrammarListener from './XpressionGrammarListener.js';
import XpressionGrammarVisitor from './XpressionGrammarVisitor.js';

const serializedATN = [4,1,54,212,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,1,1,1,3,
1,42,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,56,8,2,1,3,
1,3,3,3,60,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,72,8,5,1,5,1,
5,1,5,1,5,1,5,1,5,5,5,80,8,5,10,5,12,5,83,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,5,6,94,8,6,10,6,12,6,97,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,116,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,5,8,127,8,8,10,8,12,8,130,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,5,9,144,8,9,10,9,12,9,147,9,9,1,10,1,10,1,10,1,10,1,10,1,
10,5,10,155,8,10,10,10,12,10,158,9,10,1,11,1,11,1,11,1,11,3,11,164,8,11,
1,12,3,12,167,8,12,1,12,1,12,1,12,5,12,172,8,12,10,12,12,12,175,9,12,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,183,8,13,1,14,1,14,1,14,1,14,1,14,5,14,190,
8,14,10,14,12,14,193,9,14,3,14,195,8,14,1,14,1,14,1,15,1,15,1,16,1,16,1,
16,1,16,3,16,205,8,16,1,17,1,17,1,17,3,17,210,8,17,1,17,0,5,10,12,16,18,
20,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,1,1,0,4,6,224,0,
36,1,0,0,0,2,41,1,0,0,0,4,55,1,0,0,0,6,59,1,0,0,0,8,61,1,0,0,0,10,71,1,0,
0,0,12,84,1,0,0,0,14,115,1,0,0,0,16,117,1,0,0,0,18,131,1,0,0,0,20,148,1,
0,0,0,22,163,1,0,0,0,24,166,1,0,0,0,26,182,1,0,0,0,28,184,1,0,0,0,30,198,
1,0,0,0,32,204,1,0,0,0,34,209,1,0,0,0,36,37,3,2,1,0,37,38,5,0,0,1,38,1,1,
0,0,0,39,42,3,6,3,0,40,42,3,4,2,0,41,39,1,0,0,0,41,40,1,0,0,0,42,3,1,0,0,
0,43,44,5,23,0,0,44,45,3,6,3,0,45,46,5,24,0,0,46,56,1,0,0,0,47,48,5,25,0,
0,48,49,3,6,3,0,49,50,5,26,0,0,50,56,1,0,0,0,51,52,5,27,0,0,52,53,3,6,3,
0,53,54,5,28,0,0,54,56,1,0,0,0,55,43,1,0,0,0,55,47,1,0,0,0,55,51,1,0,0,0,
56,5,1,0,0,0,57,60,3,10,5,0,58,60,3,8,4,0,59,57,1,0,0,0,59,58,1,0,0,0,60,
7,1,0,0,0,61,62,3,10,5,0,62,63,5,7,0,0,63,64,3,10,5,0,64,65,5,46,0,0,65,
66,3,10,5,0,66,9,1,0,0,0,67,68,6,5,-1,0,68,72,3,12,6,0,69,70,5,16,0,0,70,
72,3,10,5,3,71,67,1,0,0,0,71,69,1,0,0,0,72,81,1,0,0,0,73,74,10,2,0,0,74,
75,5,14,0,0,75,80,3,12,6,0,76,77,10,1,0,0,77,78,5,15,0,0,78,80,3,12,6,0,
79,73,1,0,0,0,79,76,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,
11,1,0,0,0,83,81,1,0,0,0,84,85,6,6,-1,0,85,86,3,14,7,0,86,95,1,0,0,0,87,
88,10,2,0,0,88,89,5,21,0,0,89,94,3,14,7,0,90,91,10,1,0,0,91,92,5,22,0,0,
92,94,3,14,7,0,93,87,1,0,0,0,93,90,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,
96,1,0,0,0,96,13,1,0,0,0,97,95,1,0,0,0,98,116,3,16,8,0,99,100,3,16,8,0,100,
101,5,19,0,0,101,102,3,16,8,0,102,116,1,0,0,0,103,104,3,16,8,0,104,105,5,
20,0,0,105,106,3,16,8,0,106,116,1,0,0,0,107,108,3,16,8,0,108,109,5,17,0,
0,109,110,3,16,8,0,110,116,1,0,0,0,111,112,3,16,8,0,112,113,5,18,0,0,113,
114,3,16,8,0,114,116,1,0,0,0,115,98,1,0,0,0,115,99,1,0,0,0,115,103,1,0,0,
0,115,107,1,0,0,0,115,111,1,0,0,0,116,15,1,0,0,0,117,118,6,8,-1,0,118,119,
3,18,9,0,119,128,1,0,0,0,120,121,10,2,0,0,121,122,5,8,0,0,122,127,3,18,9,
0,123,124,10,1,0,0,124,125,5,9,0,0,125,127,3,18,9,0,126,120,1,0,0,0,126,
123,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,17,1,0,0,
0,130,128,1,0,0,0,131,132,6,9,-1,0,132,133,3,20,10,0,133,145,1,0,0,0,134,
135,10,3,0,0,135,136,5,10,0,0,136,144,3,20,10,0,137,138,10,2,0,0,138,139,
5,11,0,0,139,144,3,20,10,0,140,141,10,1,0,0,141,142,5,12,0,0,142,144,3,20,
10,0,143,134,1,0,0,0,143,137,1,0,0,0,143,140,1,0,0,0,144,147,1,0,0,0,145,
143,1,0,0,0,145,146,1,0,0,0,146,19,1,0,0,0,147,145,1,0,0,0,148,149,6,10,
-1,0,149,150,3,22,11,0,150,156,1,0,0,0,151,152,10,1,0,0,152,153,5,13,0,0,
153,155,3,22,11,0,154,151,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,
1,0,0,0,157,21,1,0,0,0,158,156,1,0,0,0,159,164,3,32,16,0,160,164,3,24,12,
0,161,164,3,28,14,0,162,164,3,4,2,0,163,159,1,0,0,0,163,160,1,0,0,0,163,
161,1,0,0,0,163,162,1,0,0,0,164,23,1,0,0,0,165,167,7,0,0,0,166,165,1,0,0,
0,166,167,1,0,0,0,167,168,1,0,0,0,168,173,3,26,13,0,169,170,5,3,0,0,170,
172,3,26,13,0,171,169,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,
0,0,0,174,25,1,0,0,0,175,173,1,0,0,0,176,183,3,30,15,0,177,178,3,30,15,0,
178,179,5,25,0,0,179,180,3,2,1,0,180,181,5,25,0,0,181,183,1,0,0,0,182,176,
1,0,0,0,182,177,1,0,0,0,183,27,1,0,0,0,184,185,3,30,15,0,185,194,5,23,0,
0,186,191,3,2,1,0,187,188,5,45,0,0,188,190,3,2,1,0,189,187,1,0,0,0,190,193,
1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,
194,186,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,197,5,24,0,0,197,29,
1,0,0,0,198,199,5,54,0,0,199,31,1,0,0,0,200,205,5,53,0,0,201,205,5,52,0,
0,202,205,3,34,17,0,203,205,5,50,0,0,204,200,1,0,0,0,204,201,1,0,0,0,204,
202,1,0,0,0,204,203,1,0,0,0,205,33,1,0,0,0,206,210,5,51,0,0,207,208,5,9,
0,0,208,210,5,51,0,0,209,206,1,0,0,0,209,207,1,0,0,0,210,35,1,0,0,0,22,41,
55,59,71,79,81,93,95,115,126,128,143,145,156,163,166,173,182,191,194,204,
209];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class XpressionGrammar extends antlr4.Parser {

    static grammarFileName = "XpressionGrammar.g4";
    static literalNames = [ null, "'''", "'\"'", "'.'", "'$'", "'#'", "'@'", 
                            "'?'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", 
                            "'&&'", "'||'", "'!'", "'>'", "'>='", "'<'", 
                            "'<='", "'=='", "'!='", "'('", "')'", "'['", 
                            "']'", "'{'", "'}'", null, "'import'", "'from'", 
                            "'fun'", "'def'", "'if'", "'else'", "'switch'", 
                            "'case'", "'for'", "'in'", "'return'", "'break'", 
                            "'continue'", "'='", "'+='", "','", "':'", "'_'" ];
    static symbolicNames = [ null, "SQUOTE", "DQUOTE", "ACCESSOR", "DOLLOR", 
                             "HASH", "AT", "QUE", "ADD", "SUB", "MUL", "DIV", 
                             "MOD", "POW", "AND", "OR", "NOT", "GT", "GE", 
                             "LT", "LE", "EQ", "NEQ", "LRB", "RRB", "LSB", 
                             "RSB", "LCB", "RCB", "WS", "IMPORT", "FROM", 
                             "FUNCTION", "DEF", "IF", "ELSE", "SWITCH", 
                             "CASE", "FOR", "IN", "RETURN", "BREAK", "CONTINUE", 
                             "ASSIGN", "APPEND", "COMMA", "COLON", "UNDERSCORE", 
                             "MultiLineComment", "SingleLineComment", "TEXT", 
                             "NUMBER", "NULL", "BOOLEAN", "IDENTIFIER" ];
    static ruleNames = [ "root", "expression", "scope", "infixExpression", 
                         "ternary", "logical", "equality", "comparison", 
                         "addition", "multiplication", "exponentiation", 
                         "operation", "accessor", "property", "function", 
                         "identifier", "literal", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = XpressionGrammar.ruleNames;
        this.literalNames = XpressionGrammar.literalNames;
        this.symbolicNames = XpressionGrammar.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.logical_sempred(localctx, predIndex);
    	case 6:
    	    		return this.equality_sempred(localctx, predIndex);
    	case 8:
    	    		return this.addition_sempred(localctx, predIndex);
    	case 9:
    	    		return this.multiplication_sempred(localctx, predIndex);
    	case 10:
    	    		return this.exponentiation_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    logical_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    equality_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    addition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multiplication_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 6:
    			return this.precpred(this._ctx, 3);
    		case 7:
    			return this.precpred(this._ctx, 2);
    		case 8:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    exponentiation_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 9:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, XpressionGrammar.RULE_root);
	    try {
	        localctx = new EvaluateExpressionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.expression();
	        this.state = 37;
	        this.match(XpressionGrammar.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, XpressionGrammar.RULE_expression);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new InfixExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.infixExpression();
	            break;

	        case 2:
	            localctx = new ScopedExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.scope();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scope() {
	    let localctx = new ScopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, XpressionGrammar.RULE_scope);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            localctx = new RoundBracketExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.match(XpressionGrammar.LRB);
	            this.state = 44;
	            this.infixExpression();
	            this.state = 45;
	            this.match(XpressionGrammar.RRB);
	            break;
	        case 25:
	            localctx = new SquareBracketExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(XpressionGrammar.LSB);
	            this.state = 48;
	            this.infixExpression();
	            this.state = 49;
	            this.match(XpressionGrammar.RSB);
	            break;
	        case 27:
	            localctx = new CurlyBracketExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(XpressionGrammar.LCB);
	            this.state = 52;
	            this.infixExpression();
	            this.state = 53;
	            this.match(XpressionGrammar.RCB);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	infixExpression() {
	    let localctx = new InfixExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, XpressionGrammar.RULE_infixExpression);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LogicalExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.logical(0);
	            break;

	        case 2:
	            localctx = new TernaryExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.ternary();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ternary() {
	    let localctx = new TernaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, XpressionGrammar.RULE_ternary);
	    try {
	        localctx = new TernaryExpressionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.logical(0);
	        this.state = 62;
	        this.match(XpressionGrammar.QUE);
	        this.state = 63;
	        this.logical(0);
	        this.state = 64;
	        this.match(XpressionGrammar.COLON);
	        this.state = 65;
	        this.logical(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	logical(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, XpressionGrammar.RULE_logical, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 6:
	        case 9:
	        case 23:
	        case 25:
	        case 27:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	            localctx = new EqualityExpression_IgnoredContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 68;
	            this.equality(0);
	            break;
	        case 16:
	            localctx = new LogicalExpressionNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 69;
	            localctx.operator = this.match(XpressionGrammar.NOT);
	            this.state = 70;
	            localctx.left = this.logical(3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 81;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 79;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LogicalExpressionAndContext(this, new LogicalContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_logical);
	                    this.state = 73;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 74;
	                    localctx.operator = this.match(XpressionGrammar.AND);
	                    this.state = 75;
	                    localctx.right = this.equality(0);
	                    break;

	                case 2:
	                    localctx = new LogicalExpressionOrContext(this, new LogicalContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_logical);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 77;
	                    localctx.operator = this.match(XpressionGrammar.OR);
	                    this.state = 78;
	                    localctx.right = this.equality(0);
	                    break;

	                } 
	            }
	            this.state = 83;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	equality(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new EqualityContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, XpressionGrammar.RULE_equality, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new ComparisonExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 85;
	        this.comparison();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 93;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new EqualityExpressionEqualToContext(this, new EqualityContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_equality);
	                    this.state = 87;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 88;
	                    localctx.operator = this.match(XpressionGrammar.EQ);
	                    this.state = 89;
	                    localctx.right = this.comparison();
	                    break;

	                case 2:
	                    localctx = new EqualityExpressionNotEqualToContext(this, new EqualityContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_equality);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 91;
	                    localctx.operator = this.match(XpressionGrammar.NEQ);
	                    this.state = 92;
	                    localctx.right = this.comparison();
	                    break;

	                } 
	            }
	            this.state = 97;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, XpressionGrammar.RULE_comparison);
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AdditionExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.addition(0);
	            break;

	        case 2:
	            localctx = new ComparisonExpressionLessThanContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            localctx.left = this.addition(0);
	            this.state = 100;
	            localctx.operator = this.match(XpressionGrammar.LT);
	            this.state = 101;
	            localctx.right = this.addition(0);
	            break;

	        case 3:
	            localctx = new ComparisonExpressionLessThanOrEqualContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            localctx.left = this.addition(0);
	            this.state = 104;
	            localctx.operator = this.match(XpressionGrammar.LE);
	            this.state = 105;
	            localctx.right = this.addition(0);
	            break;

	        case 4:
	            localctx = new ComparisonExpressionGreaterThanContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 107;
	            localctx.left = this.addition(0);
	            this.state = 108;
	            localctx.operator = this.match(XpressionGrammar.GT);
	            this.state = 109;
	            localctx.right = this.addition(0);
	            break;

	        case 5:
	            localctx = new ComparisonExpressionGreaterThanOrEqualContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 111;
	            localctx.left = this.addition(0);
	            this.state = 112;
	            localctx.operator = this.match(XpressionGrammar.GE);
	            this.state = 113;
	            localctx.right = this.addition(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	addition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AdditionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, XpressionGrammar.RULE_addition, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new MultiplicationExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 118;
	        this.multiplication(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 126;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditionExpressionContext(this, new AdditionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_addition);
	                    this.state = 120;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 121;
	                    localctx.operator = this.match(XpressionGrammar.ADD);
	                    this.state = 122;
	                    localctx.right = this.multiplication(0);
	                    break;

	                case 2:
	                    localctx = new SubtractionExpressionContext(this, new AdditionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_addition);
	                    this.state = 123;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 124;
	                    localctx.operator = this.match(XpressionGrammar.SUB);
	                    this.state = 125;
	                    localctx.right = this.multiplication(0);
	                    break;

	                } 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	multiplication(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MultiplicationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, XpressionGrammar.RULE_multiplication, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new ExponentiationExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 132;
	        this.exponentiation(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 143;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicationExpressionContext(this, new MultiplicationContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_multiplication);
	                    this.state = 134;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 135;
	                    localctx.operator = this.match(XpressionGrammar.MUL);
	                    this.state = 136;
	                    localctx.right = this.exponentiation(0);
	                    break;

	                case 2:
	                    localctx = new DivisionExpressionContext(this, new MultiplicationContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_multiplication);
	                    this.state = 137;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 138;
	                    localctx.operator = this.match(XpressionGrammar.DIV);
	                    this.state = 139;
	                    localctx.right = this.exponentiation(0);
	                    break;

	                case 3:
	                    localctx = new ModulousExpressionContext(this, new MultiplicationContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_multiplication);
	                    this.state = 140;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 141;
	                    localctx.operator = this.match(XpressionGrammar.MOD);
	                    this.state = 142;
	                    localctx.right = this.exponentiation(0);
	                    break;

	                } 
	            }
	            this.state = 147;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	exponentiation(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExponentiationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, XpressionGrammar.RULE_exponentiation, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new OperationExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 149;
	        this.operation();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExponentiationExpressionContext(this, new ExponentiationContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, XpressionGrammar.RULE_exponentiation);
	                this.state = 151;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 152;
	                localctx.operator = this.match(XpressionGrammar.POW);
	                this.state = 153;
	                localctx.right = this.operation(); 
	            }
	            this.state = 158;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	operation() {
	    let localctx = new OperationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, XpressionGrammar.RULE_operation);
	    try {
	        this.state = 163;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.literal();
	            break;

	        case 2:
	            localctx = new AccessorExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.accessor();
	            break;

	        case 3:
	            localctx = new FunctionExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            this.function_();
	            break;

	        case 4:
	            localctx = new ScopedExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 162;
	            this.scope();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accessor() {
	    let localctx = new AccessorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, XpressionGrammar.RULE_accessor);
	    var _la = 0;
	    try {
	        localctx = new ObjectAccessorContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0)) {
	            this.state = 165;
	            localctx.special = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
	                localctx.special = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 168;
	        this.property();
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 169;
	                this.match(XpressionGrammar.ACCESSOR);
	                this.state = 170;
	                this.property(); 
	            }
	            this.state = 175;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, XpressionGrammar.RULE_property);
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PropertyAccessorContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new SubscriptAccessorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.identifier();
	            this.state = 178;
	            this.match(XpressionGrammar.LSB);
	            this.state = 179;
	            localctx.index = this.expression();
	            this.state = 180;
	            this.match(XpressionGrammar.LSB);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, XpressionGrammar.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        localctx.functionName = this.identifier();
	        this.state = 185;
	        this.match(XpressionGrammar.LRB);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 176226928) !== 0) || ((((_la - 50)) & ~0x1f) === 0 && ((1 << (_la - 50)) & 31) !== 0)) {
	            this.state = 186;
	            this.expression();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===45) {
	                this.state = 187;
	                this.match(XpressionGrammar.COMMA);
	                this.state = 188;
	                this.expression();
	                this.state = 193;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 196;
	        this.match(XpressionGrammar.RRB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, XpressionGrammar.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(XpressionGrammar.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, XpressionGrammar.RULE_literal);
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            localctx = new BooleanExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 200;
	            this.match(XpressionGrammar.BOOLEAN);
	            break;
	        case 52:
	            localctx = new NullExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.match(XpressionGrammar.NULL);
	            break;
	        case 9:
	        case 51:
	            localctx = new NumberExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 202;
	            this.number();
	            break;
	        case 50:
	            localctx = new TextExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 203;
	            this.match(XpressionGrammar.TEXT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, XpressionGrammar.RULE_number);
	    try {
	        this.state = 209;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            localctx = new PositiveNumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.match(XpressionGrammar.NUMBER);
	            break;
	        case 9:
	            localctx = new NegativeNumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
	            this.match(XpressionGrammar.SUB);
	            this.state = 208;
	            this.match(XpressionGrammar.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

XpressionGrammar.EOF = antlr4.Token.EOF;
XpressionGrammar.SQUOTE = 1;
XpressionGrammar.DQUOTE = 2;
XpressionGrammar.ACCESSOR = 3;
XpressionGrammar.DOLLOR = 4;
XpressionGrammar.HASH = 5;
XpressionGrammar.AT = 6;
XpressionGrammar.QUE = 7;
XpressionGrammar.ADD = 8;
XpressionGrammar.SUB = 9;
XpressionGrammar.MUL = 10;
XpressionGrammar.DIV = 11;
XpressionGrammar.MOD = 12;
XpressionGrammar.POW = 13;
XpressionGrammar.AND = 14;
XpressionGrammar.OR = 15;
XpressionGrammar.NOT = 16;
XpressionGrammar.GT = 17;
XpressionGrammar.GE = 18;
XpressionGrammar.LT = 19;
XpressionGrammar.LE = 20;
XpressionGrammar.EQ = 21;
XpressionGrammar.NEQ = 22;
XpressionGrammar.LRB = 23;
XpressionGrammar.RRB = 24;
XpressionGrammar.LSB = 25;
XpressionGrammar.RSB = 26;
XpressionGrammar.LCB = 27;
XpressionGrammar.RCB = 28;
XpressionGrammar.WS = 29;
XpressionGrammar.IMPORT = 30;
XpressionGrammar.FROM = 31;
XpressionGrammar.FUNCTION = 32;
XpressionGrammar.DEF = 33;
XpressionGrammar.IF = 34;
XpressionGrammar.ELSE = 35;
XpressionGrammar.SWITCH = 36;
XpressionGrammar.CASE = 37;
XpressionGrammar.FOR = 38;
XpressionGrammar.IN = 39;
XpressionGrammar.RETURN = 40;
XpressionGrammar.BREAK = 41;
XpressionGrammar.CONTINUE = 42;
XpressionGrammar.ASSIGN = 43;
XpressionGrammar.APPEND = 44;
XpressionGrammar.COMMA = 45;
XpressionGrammar.COLON = 46;
XpressionGrammar.UNDERSCORE = 47;
XpressionGrammar.MultiLineComment = 48;
XpressionGrammar.SingleLineComment = 49;
XpressionGrammar.TEXT = 50;
XpressionGrammar.NUMBER = 51;
XpressionGrammar.NULL = 52;
XpressionGrammar.BOOLEAN = 53;
XpressionGrammar.IDENTIFIER = 54;

XpressionGrammar.RULE_root = 0;
XpressionGrammar.RULE_expression = 1;
XpressionGrammar.RULE_scope = 2;
XpressionGrammar.RULE_infixExpression = 3;
XpressionGrammar.RULE_ternary = 4;
XpressionGrammar.RULE_logical = 5;
XpressionGrammar.RULE_equality = 6;
XpressionGrammar.RULE_comparison = 7;
XpressionGrammar.RULE_addition = 8;
XpressionGrammar.RULE_multiplication = 9;
XpressionGrammar.RULE_exponentiation = 10;
XpressionGrammar.RULE_operation = 11;
XpressionGrammar.RULE_accessor = 12;
XpressionGrammar.RULE_property = 13;
XpressionGrammar.RULE_function = 14;
XpressionGrammar.RULE_identifier = 15;
XpressionGrammar.RULE_literal = 16;
XpressionGrammar.RULE_number = 17;

class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_root;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EvaluateExpressionContext extends RootContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(XpressionGrammar.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterEvaluateExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitEvaluateExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitEvaluateExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.EvaluateExpressionContext = EvaluateExpressionContext;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ScopedExpression_IgnoredContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterScopedExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitScopedExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitScopedExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ScopedExpression_IgnoredContext = ScopedExpression_IgnoredContext;

class InfixExpression_IgnoredContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterInfixExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitInfixExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitInfixExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.InfixExpression_IgnoredContext = InfixExpression_IgnoredContext;

class ScopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_scope;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CurlyBracketExpressionContext extends ScopeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LCB() {
	    return this.getToken(XpressionGrammar.LCB, 0);
	};

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	RCB() {
	    return this.getToken(XpressionGrammar.RCB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterCurlyBracketExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitCurlyBracketExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitCurlyBracketExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.CurlyBracketExpressionContext = CurlyBracketExpressionContext;

class RoundBracketExpressionContext extends ScopeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LRB() {
	    return this.getToken(XpressionGrammar.LRB, 0);
	};

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	RRB() {
	    return this.getToken(XpressionGrammar.RRB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterRoundBracketExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitRoundBracketExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitRoundBracketExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.RoundBracketExpressionContext = RoundBracketExpressionContext;

class SquareBracketExpressionContext extends ScopeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LSB() {
	    return this.getToken(XpressionGrammar.LSB, 0);
	};

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	RSB() {
	    return this.getToken(XpressionGrammar.RSB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterSquareBracketExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitSquareBracketExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitSquareBracketExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.SquareBracketExpressionContext = SquareBracketExpressionContext;

class InfixExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_infixExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TernaryExpression_IgnoredContext extends InfixExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ternary() {
	    return this.getTypedRuleContext(TernaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterTernaryExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitTernaryExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitTernaryExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.TernaryExpression_IgnoredContext = TernaryExpression_IgnoredContext;

class LogicalExpression_IgnoredContext extends InfixExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterLogicalExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitLogicalExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitLogicalExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.LogicalExpression_IgnoredContext = LogicalExpression_IgnoredContext;

class TernaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_ternary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TernaryExpressionContext extends TernaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logical = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalContext);
	    } else {
	        return this.getTypedRuleContext(LogicalContext,i);
	    }
	};

	QUE() {
	    return this.getToken(XpressionGrammar.QUE, 0);
	};

	COLON() {
	    return this.getToken(XpressionGrammar.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterTernaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitTernaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitTernaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.TernaryExpressionContext = TernaryExpressionContext;

class LogicalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_logical;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicalExpressionOrContext extends LogicalContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	OR() {
	    return this.getToken(XpressionGrammar.OR, 0);
	};

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterLogicalExpressionOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitLogicalExpressionOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitLogicalExpressionOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.LogicalExpressionOrContext = LogicalExpressionOrContext;

class EqualityExpression_IgnoredContext extends LogicalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterEqualityExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitEqualityExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitEqualityExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.EqualityExpression_IgnoredContext = EqualityExpression_IgnoredContext;

class LogicalExpressionNotContext extends LogicalContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
        this.left = null;;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(XpressionGrammar.NOT, 0);
	};

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterLogicalExpressionNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitLogicalExpressionNot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitLogicalExpressionNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.LogicalExpressionNotContext = LogicalExpressionNotContext;

class LogicalExpressionAndContext extends LogicalContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	AND() {
	    return this.getToken(XpressionGrammar.AND, 0);
	};

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterLogicalExpressionAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitLogicalExpressionAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitLogicalExpressionAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.LogicalExpressionAndContext = LogicalExpressionAndContext;

class EqualityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_equality;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ComparisonExpression_IgnoredContext extends EqualityContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterComparisonExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitComparisonExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitComparisonExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ComparisonExpression_IgnoredContext = ComparisonExpression_IgnoredContext;

class EqualityExpressionEqualToContext extends EqualityContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	EQ() {
	    return this.getToken(XpressionGrammar.EQ, 0);
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterEqualityExpressionEqualTo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitEqualityExpressionEqualTo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitEqualityExpressionEqualTo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.EqualityExpressionEqualToContext = EqualityExpressionEqualToContext;

class EqualityExpressionNotEqualToContext extends EqualityContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	NEQ() {
	    return this.getToken(XpressionGrammar.NEQ, 0);
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterEqualityExpressionNotEqualTo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitEqualityExpressionNotEqualTo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitEqualityExpressionNotEqualTo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.EqualityExpressionNotEqualToContext = EqualityExpressionNotEqualToContext;

class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_comparison;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ComparisonExpressionGreaterThanOrEqualContext extends ComparisonContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	addition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionContext);
	    } else {
	        return this.getTypedRuleContext(AdditionContext,i);
	    }
	};

	GE() {
	    return this.getToken(XpressionGrammar.GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterComparisonExpressionGreaterThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitComparisonExpressionGreaterThanOrEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitComparisonExpressionGreaterThanOrEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ComparisonExpressionGreaterThanOrEqualContext = ComparisonExpressionGreaterThanOrEqualContext;

class ComparisonExpressionLessThanContext extends ComparisonContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	addition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionContext);
	    } else {
	        return this.getTypedRuleContext(AdditionContext,i);
	    }
	};

	LT() {
	    return this.getToken(XpressionGrammar.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterComparisonExpressionLessThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitComparisonExpressionLessThan(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitComparisonExpressionLessThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ComparisonExpressionLessThanContext = ComparisonExpressionLessThanContext;

class ComparisonExpressionLessThanOrEqualContext extends ComparisonContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	addition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionContext);
	    } else {
	        return this.getTypedRuleContext(AdditionContext,i);
	    }
	};

	LE() {
	    return this.getToken(XpressionGrammar.LE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterComparisonExpressionLessThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitComparisonExpressionLessThanOrEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitComparisonExpressionLessThanOrEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ComparisonExpressionLessThanOrEqualContext = ComparisonExpressionLessThanOrEqualContext;

class ComparisonExpressionGreaterThanContext extends ComparisonContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	addition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditionContext);
	    } else {
	        return this.getTypedRuleContext(AdditionContext,i);
	    }
	};

	GT() {
	    return this.getToken(XpressionGrammar.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterComparisonExpressionGreaterThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitComparisonExpressionGreaterThan(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitComparisonExpressionGreaterThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ComparisonExpressionGreaterThanContext = ComparisonExpressionGreaterThanContext;

class AdditionExpression_IgnoredContext extends ComparisonContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterAdditionExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitAdditionExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitAdditionExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.AdditionExpression_IgnoredContext = AdditionExpression_IgnoredContext;

class AdditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_addition;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AdditionExpressionContext extends AdditionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
	};

	ADD() {
	    return this.getToken(XpressionGrammar.ADD, 0);
	};

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterAdditionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitAdditionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitAdditionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.AdditionExpressionContext = AdditionExpressionContext;

class MultiplicationExpression_IgnoredContext extends AdditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterMultiplicationExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitMultiplicationExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitMultiplicationExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.MultiplicationExpression_IgnoredContext = MultiplicationExpression_IgnoredContext;

class SubtractionExpressionContext extends AdditionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
	};

	SUB() {
	    return this.getToken(XpressionGrammar.SUB, 0);
	};

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterSubtractionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitSubtractionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitSubtractionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.SubtractionExpressionContext = SubtractionExpressionContext;

class MultiplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_multiplication;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MultiplicationExpressionContext extends MultiplicationContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	MUL() {
	    return this.getToken(XpressionGrammar.MUL, 0);
	};

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterMultiplicationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitMultiplicationExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitMultiplicationExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.MultiplicationExpressionContext = MultiplicationExpressionContext;

class ModulousExpressionContext extends MultiplicationContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	MOD() {
	    return this.getToken(XpressionGrammar.MOD, 0);
	};

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterModulousExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitModulousExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitModulousExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ModulousExpressionContext = ModulousExpressionContext;

class ExponentiationExpression_IgnoredContext extends MultiplicationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterExponentiationExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitExponentiationExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitExponentiationExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ExponentiationExpression_IgnoredContext = ExponentiationExpression_IgnoredContext;

class DivisionExpressionContext extends MultiplicationContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	DIV() {
	    return this.getToken(XpressionGrammar.DIV, 0);
	};

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterDivisionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitDivisionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitDivisionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.DivisionExpressionContext = DivisionExpressionContext;

class ExponentiationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_exponentiation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OperationExpression_IgnoredContext extends ExponentiationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterOperationExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitOperationExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitOperationExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.OperationExpression_IgnoredContext = OperationExpression_IgnoredContext;

class ExponentiationExpressionContext extends ExponentiationContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	POW() {
	    return this.getToken(XpressionGrammar.POW, 0);
	};

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterExponentiationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitExponentiationExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitExponentiationExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ExponentiationExpressionContext = ExponentiationExpressionContext;

class OperationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_operation;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AccessorExpressionContext extends OperationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	accessor() {
	    return this.getTypedRuleContext(AccessorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterAccessorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitAccessorExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitAccessorExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.AccessorExpressionContext = AccessorExpressionContext;

class LiteralExpressionContext extends OperationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.LiteralExpressionContext = LiteralExpressionContext;

class FunctionExpressionContext extends OperationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitFunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.FunctionExpressionContext = FunctionExpressionContext;

class ScopedExpressionContext extends OperationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterScopedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitScopedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitScopedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ScopedExpressionContext = ScopedExpressionContext;

class AccessorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_accessor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ObjectAccessorContext extends AccessorContext {

    constructor(parser, ctx) {
        super(parser);
        this.special = null;;
        super.copyFrom(ctx);
    }

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	ACCESSOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressionGrammar.ACCESSOR);
	    } else {
	        return this.getToken(XpressionGrammar.ACCESSOR, i);
	    }
	};


	DOLLOR() {
	    return this.getToken(XpressionGrammar.DOLLOR, 0);
	};

	HASH() {
	    return this.getToken(XpressionGrammar.HASH, 0);
	};

	AT() {
	    return this.getToken(XpressionGrammar.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterObjectAccessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitObjectAccessor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitObjectAccessor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.ObjectAccessorContext = ObjectAccessorContext;

class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_property;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PropertyAccessorContext extends PropertyContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterPropertyAccessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitPropertyAccessor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitPropertyAccessor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.PropertyAccessorContext = PropertyAccessorContext;

class SubscriptAccessorContext extends PropertyContext {

    constructor(parser, ctx) {
        super(parser);
        this.index = null;;
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	LSB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressionGrammar.LSB);
	    } else {
	        return this.getToken(XpressionGrammar.LSB, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterSubscriptAccessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitSubscriptAccessor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitSubscriptAccessor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.SubscriptAccessorContext = SubscriptAccessorContext;

class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_function;
        this.functionName = null;
    }

	LRB() {
	    return this.getToken(XpressionGrammar.LRB, 0);
	};

	RRB() {
	    return this.getToken(XpressionGrammar.RRB, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressionGrammar.COMMA);
	    } else {
	        return this.getToken(XpressionGrammar.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(XpressionGrammar.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_literal;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TextExpressionContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TEXT() {
	    return this.getToken(XpressionGrammar.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterTextExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitTextExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitTextExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.TextExpressionContext = TextExpressionContext;

class NullExpressionContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(XpressionGrammar.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterNullExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitNullExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitNullExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.NullExpressionContext = NullExpressionContext;

class NumberExpressionContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterNumberExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitNumberExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitNumberExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.NumberExpressionContext = NumberExpressionContext;

class BooleanExpressionContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN() {
	    return this.getToken(XpressionGrammar.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitBooleanExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitBooleanExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.BooleanExpressionContext = BooleanExpressionContext;

class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressionGrammar.RULE_number;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NegativeNumberContext extends NumberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SUB() {
	    return this.getToken(XpressionGrammar.SUB, 0);
	};

	NUMBER() {
	    return this.getToken(XpressionGrammar.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterNegativeNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitNegativeNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitNegativeNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.NegativeNumberContext = NegativeNumberContext;

class PositiveNumberContext extends NumberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(XpressionGrammar.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.enterPositiveNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressionGrammarListener ) {
	        listener.exitPositiveNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressionGrammarVisitor ) {
	        return visitor.visitPositiveNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressionGrammar.PositiveNumberContext = PositiveNumberContext;


XpressionGrammar.RootContext = RootContext; 
XpressionGrammar.ExpressionContext = ExpressionContext; 
XpressionGrammar.ScopeContext = ScopeContext; 
XpressionGrammar.InfixExpressionContext = InfixExpressionContext; 
XpressionGrammar.TernaryContext = TernaryContext; 
XpressionGrammar.LogicalContext = LogicalContext; 
XpressionGrammar.EqualityContext = EqualityContext; 
XpressionGrammar.ComparisonContext = ComparisonContext; 
XpressionGrammar.AdditionContext = AdditionContext; 
XpressionGrammar.MultiplicationContext = MultiplicationContext; 
XpressionGrammar.ExponentiationContext = ExponentiationContext; 
XpressionGrammar.OperationContext = OperationContext; 
XpressionGrammar.AccessorContext = AccessorContext; 
XpressionGrammar.PropertyContext = PropertyContext; 
XpressionGrammar.FunctionContext = FunctionContext; 
XpressionGrammar.IdentifierContext = IdentifierContext; 
XpressionGrammar.LiteralContext = LiteralContext; 
XpressionGrammar.NumberContext = NumberContext; 
