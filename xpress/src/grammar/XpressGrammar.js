// Generated from /Users/abhijit/WebstormProjects/xpress-react/xpress/grammar/XpressGrammar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import XpressGrammarListener from './XpressGrammarListener.js';
import XpressGrammarVisitor from './XpressGrammarVisitor.js';

const serializedATN = [4,1,54,396,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,1,0,5,0,74,8,0,10,0,12,0,77,9,0,1,0,1,0,1,1,1,1,1,1,3,1,84,
8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,94,8,3,1,3,1,3,1,4,1,4,1,4,1,4,5,
4,102,8,4,10,4,12,4,105,9,4,3,4,107,8,4,1,4,1,4,1,5,1,5,4,5,113,8,5,11,5,
12,5,114,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,125,8,6,1,7,3,7,128,8,7,1,7,
1,7,1,7,1,7,1,7,3,7,135,8,7,1,7,1,7,1,7,1,7,3,7,141,8,7,1,8,1,8,1,8,1,8,
1,8,1,8,3,8,149,8,8,1,9,1,9,1,9,1,9,5,9,155,8,9,10,9,12,9,158,9,9,1,9,1,
9,1,10,1,10,1,10,1,10,1,10,1,10,3,10,168,8,10,1,11,1,11,3,11,172,8,11,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,182,8,12,10,12,12,12,185,9,12,
1,12,1,12,3,12,189,8,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,197,8,13,10,13,
12,13,200,9,13,1,13,1,13,3,13,204,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,
1,14,1,15,1,15,3,15,216,8,15,1,15,1,15,3,15,220,8,15,1,16,1,16,1,16,1,16,
1,17,1,17,1,17,3,17,229,8,17,1,18,1,18,3,18,233,8,18,1,19,1,19,1,19,1,20,
1,20,3,20,240,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,3,21,254,8,21,1,22,1,22,3,22,258,8,22,1,23,1,23,1,23,1,23,1,23,1,23,
1,24,1,24,1,24,1,24,3,24,270,8,24,1,24,1,24,1,24,1,24,1,24,1,24,5,24,278,
8,24,10,24,12,24,281,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,
25,292,8,25,10,25,12,25,295,9,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,314,8,26,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,5,27,325,8,27,10,27,12,27,328,9,27,1,28,1,
28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,5,28,342,8,28,10,28,
12,28,345,9,28,1,29,1,29,1,29,1,29,1,29,1,29,5,29,353,8,29,10,29,12,29,356,
9,29,1,30,1,30,1,30,1,30,3,30,362,8,30,1,31,3,31,365,8,31,1,31,1,31,1,31,
5,31,370,8,31,10,31,12,31,373,9,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,381,
8,32,1,33,1,33,1,34,1,34,1,34,1,34,3,34,389,8,34,1,35,1,35,1,35,3,35,394,
8,35,1,35,0,5,48,50,54,56,58,36,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,0,2,2,0,10,
10,54,54,1,0,4,6,416,0,75,1,0,0,0,2,83,1,0,0,0,4,85,1,0,0,0,6,90,1,0,0,0,
8,97,1,0,0,0,10,110,1,0,0,0,12,124,1,0,0,0,14,140,1,0,0,0,16,148,1,0,0,0,
18,150,1,0,0,0,20,167,1,0,0,0,22,171,1,0,0,0,24,173,1,0,0,0,26,190,1,0,0,
0,28,207,1,0,0,0,30,219,1,0,0,0,32,221,1,0,0,0,34,225,1,0,0,0,36,232,1,0,
0,0,38,234,1,0,0,0,40,239,1,0,0,0,42,253,1,0,0,0,44,257,1,0,0,0,46,259,1,
0,0,0,48,269,1,0,0,0,50,282,1,0,0,0,52,313,1,0,0,0,54,315,1,0,0,0,56,329,
1,0,0,0,58,346,1,0,0,0,60,361,1,0,0,0,62,364,1,0,0,0,64,380,1,0,0,0,66,382,
1,0,0,0,68,388,1,0,0,0,70,393,1,0,0,0,72,74,3,2,1,0,73,72,1,0,0,0,74,77,
1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,77,75,1,0,0,0,78,79,5,
0,0,1,79,1,1,0,0,0,80,84,3,36,18,0,81,84,3,4,2,0,82,84,3,6,3,0,83,80,1,0,
0,0,83,81,1,0,0,0,83,82,1,0,0,0,84,3,1,0,0,0,85,86,5,30,0,0,86,87,7,0,0,
0,87,88,5,31,0,0,88,89,5,50,0,0,89,5,1,0,0,0,90,91,5,32,0,0,91,93,5,54,0,
0,92,94,3,8,4,0,93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,3,10,5,0,
96,7,1,0,0,0,97,106,5,23,0,0,98,103,3,34,17,0,99,100,5,45,0,0,100,102,3,
34,17,0,101,99,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,
107,1,0,0,0,105,103,1,0,0,0,106,98,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,
0,108,109,5,24,0,0,109,9,1,0,0,0,110,112,5,27,0,0,111,113,3,12,6,0,112,111,
1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,
116,117,5,28,0,0,117,11,1,0,0,0,118,125,3,36,18,0,119,125,3,14,7,0,120,125,
3,22,11,0,121,125,3,28,14,0,122,125,3,16,8,0,123,125,3,30,15,0,124,118,1,
0,0,0,124,119,1,0,0,0,124,120,1,0,0,0,124,121,1,0,0,0,124,122,1,0,0,0,124,
123,1,0,0,0,125,13,1,0,0,0,126,128,5,33,0,0,127,126,1,0,0,0,127,128,1,0,
0,0,128,129,1,0,0,0,129,130,3,34,17,0,130,131,5,43,0,0,131,132,3,32,16,0,
132,141,1,0,0,0,133,135,5,33,0,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,
1,0,0,0,136,137,3,34,17,0,137,138,5,43,0,0,138,139,3,16,8,0,139,141,1,0,
0,0,140,127,1,0,0,0,140,134,1,0,0,0,141,15,1,0,0,0,142,143,5,54,0,0,143,
149,3,18,9,0,144,145,5,54,0,0,145,146,3,18,9,0,146,147,3,10,5,0,147,149,
1,0,0,0,148,142,1,0,0,0,148,144,1,0,0,0,149,17,1,0,0,0,150,151,5,23,0,0,
151,156,3,20,10,0,152,153,5,45,0,0,153,155,3,20,10,0,154,152,1,0,0,0,155,
158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,
0,0,159,160,5,24,0,0,160,19,1,0,0,0,161,162,5,54,0,0,162,163,5,46,0,0,163,
168,5,50,0,0,164,165,5,54,0,0,165,166,5,46,0,0,166,168,3,32,16,0,167,161,
1,0,0,0,167,164,1,0,0,0,168,21,1,0,0,0,169,172,3,24,12,0,170,172,3,26,13,
0,171,169,1,0,0,0,171,170,1,0,0,0,172,23,1,0,0,0,173,174,5,34,0,0,174,175,
3,32,16,0,175,183,3,10,5,0,176,177,5,35,0,0,177,178,5,34,0,0,178,179,3,32,
16,0,179,180,3,10,5,0,180,182,1,0,0,0,181,176,1,0,0,0,182,185,1,0,0,0,183,
181,1,0,0,0,183,184,1,0,0,0,184,188,1,0,0,0,185,183,1,0,0,0,186,187,5,35,
0,0,187,189,3,10,5,0,188,186,1,0,0,0,188,189,1,0,0,0,189,25,1,0,0,0,190,
191,5,36,0,0,191,198,5,27,0,0,192,193,5,37,0,0,193,194,3,32,16,0,194,195,
3,10,5,0,195,197,1,0,0,0,196,192,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,
198,199,1,0,0,0,199,203,1,0,0,0,200,198,1,0,0,0,201,202,5,35,0,0,202,204,
3,10,5,0,203,201,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,206,5,28,0,
0,206,27,1,0,0,0,207,208,5,38,0,0,208,209,3,18,9,0,209,210,5,39,0,0,210,
211,3,32,16,0,211,212,3,10,5,0,212,29,1,0,0,0,213,215,5,40,0,0,214,216,3,
32,16,0,215,214,1,0,0,0,215,216,1,0,0,0,216,220,1,0,0,0,217,220,5,41,0,0,
218,220,5,42,0,0,219,213,1,0,0,0,219,217,1,0,0,0,219,218,1,0,0,0,220,31,
1,0,0,0,221,222,5,25,0,0,222,223,3,40,20,0,223,224,5,26,0,0,224,33,1,0,0,
0,225,228,5,54,0,0,226,227,5,46,0,0,227,229,5,54,0,0,228,226,1,0,0,0,228,
229,1,0,0,0,229,35,1,0,0,0,230,233,5,49,0,0,231,233,5,48,0,0,232,230,1,0,
0,0,232,231,1,0,0,0,233,37,1,0,0,0,234,235,3,40,20,0,235,236,5,0,0,1,236,
39,1,0,0,0,237,240,3,44,22,0,238,240,3,42,21,0,239,237,1,0,0,0,239,238,1,
0,0,0,240,41,1,0,0,0,241,242,5,23,0,0,242,243,3,44,22,0,243,244,5,24,0,0,
244,254,1,0,0,0,245,246,5,25,0,0,246,247,3,44,22,0,247,248,5,26,0,0,248,
254,1,0,0,0,249,250,5,27,0,0,250,251,3,44,22,0,251,252,5,28,0,0,252,254,
1,0,0,0,253,241,1,0,0,0,253,245,1,0,0,0,253,249,1,0,0,0,254,43,1,0,0,0,255,
258,3,48,24,0,256,258,3,46,23,0,257,255,1,0,0,0,257,256,1,0,0,0,258,45,1,
0,0,0,259,260,3,48,24,0,260,261,5,7,0,0,261,262,3,48,24,0,262,263,5,46,0,
0,263,264,3,48,24,0,264,47,1,0,0,0,265,266,6,24,-1,0,266,270,3,50,25,0,267,
268,5,16,0,0,268,270,3,48,24,3,269,265,1,0,0,0,269,267,1,0,0,0,270,279,1,
0,0,0,271,272,10,2,0,0,272,273,5,14,0,0,273,278,3,50,25,0,274,275,10,1,0,
0,275,276,5,15,0,0,276,278,3,50,25,0,277,271,1,0,0,0,277,274,1,0,0,0,278,
281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,49,1,0,0,0,281,279,1,0,0,
0,282,283,6,25,-1,0,283,284,3,52,26,0,284,293,1,0,0,0,285,286,10,2,0,0,286,
287,5,21,0,0,287,292,3,52,26,0,288,289,10,1,0,0,289,290,5,22,0,0,290,292,
3,52,26,0,291,285,1,0,0,0,291,288,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,
0,293,294,1,0,0,0,294,51,1,0,0,0,295,293,1,0,0,0,296,314,3,54,27,0,297,298,
3,54,27,0,298,299,5,19,0,0,299,300,3,54,27,0,300,314,1,0,0,0,301,302,3,54,
27,0,302,303,5,20,0,0,303,304,3,54,27,0,304,314,1,0,0,0,305,306,3,54,27,
0,306,307,5,17,0,0,307,308,3,54,27,0,308,314,1,0,0,0,309,310,3,54,27,0,310,
311,5,18,0,0,311,312,3,54,27,0,312,314,1,0,0,0,313,296,1,0,0,0,313,297,1,
0,0,0,313,301,1,0,0,0,313,305,1,0,0,0,313,309,1,0,0,0,314,53,1,0,0,0,315,
316,6,27,-1,0,316,317,3,56,28,0,317,326,1,0,0,0,318,319,10,2,0,0,319,320,
5,8,0,0,320,325,3,56,28,0,321,322,10,1,0,0,322,323,5,9,0,0,323,325,3,56,
28,0,324,318,1,0,0,0,324,321,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,326,
327,1,0,0,0,327,55,1,0,0,0,328,326,1,0,0,0,329,330,6,28,-1,0,330,331,3,58,
29,0,331,343,1,0,0,0,332,333,10,3,0,0,333,334,5,10,0,0,334,342,3,58,29,0,
335,336,10,2,0,0,336,337,5,11,0,0,337,342,3,58,29,0,338,339,10,1,0,0,339,
340,5,12,0,0,340,342,3,58,29,0,341,332,1,0,0,0,341,335,1,0,0,0,341,338,1,
0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,57,1,0,0,0,345,
343,1,0,0,0,346,347,6,29,-1,0,347,348,3,60,30,0,348,354,1,0,0,0,349,350,
10,1,0,0,350,351,5,13,0,0,351,353,3,60,30,0,352,349,1,0,0,0,353,356,1,0,
0,0,354,352,1,0,0,0,354,355,1,0,0,0,355,59,1,0,0,0,356,354,1,0,0,0,357,362,
3,68,34,0,358,362,3,62,31,0,359,362,3,6,3,0,360,362,3,42,21,0,361,357,1,
0,0,0,361,358,1,0,0,0,361,359,1,0,0,0,361,360,1,0,0,0,362,61,1,0,0,0,363,
365,7,1,0,0,364,363,1,0,0,0,364,365,1,0,0,0,365,366,1,0,0,0,366,371,3,64,
32,0,367,368,5,3,0,0,368,370,3,64,32,0,369,367,1,0,0,0,370,373,1,0,0,0,371,
369,1,0,0,0,371,372,1,0,0,0,372,63,1,0,0,0,373,371,1,0,0,0,374,381,3,66,
33,0,375,376,3,66,33,0,376,377,5,25,0,0,377,378,3,40,20,0,378,379,5,25,0,
0,379,381,1,0,0,0,380,374,1,0,0,0,380,375,1,0,0,0,381,65,1,0,0,0,382,383,
5,54,0,0,383,67,1,0,0,0,384,389,5,53,0,0,385,389,5,52,0,0,386,389,3,70,35,
0,387,389,5,50,0,0,388,384,1,0,0,0,388,385,1,0,0,0,388,386,1,0,0,0,388,387,
1,0,0,0,389,69,1,0,0,0,390,394,5,51,0,0,391,392,5,9,0,0,392,394,5,51,0,0,
393,390,1,0,0,0,393,391,1,0,0,0,394,71,1,0,0,0,42,75,83,93,103,106,114,124,
127,134,140,148,156,167,171,183,188,198,203,215,219,228,232,239,253,257,
269,277,279,291,293,313,324,326,341,343,354,361,364,371,380,388,393];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class XpressGrammar extends antlr4.Parser {

    static grammarFileName = "XpressGrammar.g4";
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
    static ruleNames = [ "configRoot", "config", "imports", "function", 
                         "arguments", "actionBlack", "action", "assignable", 
                         "actionable", "parameters", "parameter", "conditional", 
                         "ifElse", "switch", "iterable", "controllable", 
                         "xpression", "variable", "comment", "root", "expression", 
                         "scope", "infixExpression", "ternary", "logical", 
                         "equality", "comparison", "addition", "multiplication", 
                         "exponentiation", "operation", "accessor", "property", 
                         "identifier", "literal", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = XpressGrammar.ruleNames;
        this.literalNames = XpressGrammar.literalNames;
        this.symbolicNames = XpressGrammar.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 24:
    	    		return this.logical_sempred(localctx, predIndex);
    	case 25:
    	    		return this.equality_sempred(localctx, predIndex);
    	case 27:
    	    		return this.addition_sempred(localctx, predIndex);
    	case 28:
    	    		return this.multiplication_sempred(localctx, predIndex);
    	case 29:
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




	configRoot() {
	    let localctx = new ConfigRootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, XpressGrammar.RULE_configRoot);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 786437) !== 0)) {
	            this.state = 72;
	            this.config();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 78;
	        this.match(XpressGrammar.EOF);
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



	config() {
	    let localctx = new ConfigContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, XpressGrammar.RULE_config);
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	        case 49:
	            localctx = new CommentConfigContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.comment();
	            break;
	        case 30:
	            localctx = new ImportConfigContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.imports();
	            break;
	        case 32:
	            localctx = new FunctionConfigContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.function_();
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



	imports() {
	    let localctx = new ImportsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, XpressGrammar.RULE_imports);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(XpressGrammar.IMPORT);
	        this.state = 86;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===54)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 87;
	        this.match(XpressGrammar.FROM);
	        this.state = 88;
	        localctx.path = this.match(XpressGrammar.TEXT);
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
	    this.enterRule(localctx, 6, XpressGrammar.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(XpressGrammar.FUNCTION);
	        this.state = 91;
	        localctx.name = this.match(XpressGrammar.IDENTIFIER);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 92;
	            this.arguments();
	        }

	        this.state = 95;
	        localctx.body = this.actionBlack();
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



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, XpressGrammar.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(XpressGrammar.LRB);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54) {
	            this.state = 98;
	            this.variable();
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===45) {
	                this.state = 99;
	                this.match(XpressGrammar.COMMA);
	                this.state = 100;
	                this.variable();
	                this.state = 105;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 108;
	        this.match(XpressGrammar.RRB);
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



	actionBlack() {
	    let localctx = new ActionBlackContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, XpressGrammar.RULE_actionBlack);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(XpressGrammar.LCB);
	        this.state = 112; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 111;
	            this.action();
	            this.state = 114; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 2196395) !== 0));
	        this.state = 116;
	        this.match(XpressGrammar.RCB);
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



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, XpressGrammar.RULE_action);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CommentActionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.comment();
	            break;

	        case 2:
	            localctx = new AssignmentActionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.assignable();
	            break;

	        case 3:
	            localctx = new ConditionalActionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 120;
	            this.conditional();
	            break;

	        case 4:
	            localctx = new IterableActionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 121;
	            this.iterable();
	            break;

	        case 5:
	            localctx = new ActionableActionContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 122;
	            this.actionable();
	            break;

	        case 6:
	            localctx = new ControllableActionContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 123;
	            this.controllable();
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



	assignable() {
	    let localctx = new AssignableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, XpressGrammar.RULE_assignable);
	    var _la = 0;
	    try {
	        this.state = 140;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AssignExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 126;
	                this.match(XpressGrammar.DEF);
	            }

	            this.state = 129;
	            this.variable();
	            this.state = 130;
	            this.match(XpressGrammar.ASSIGN);
	            this.state = 131;
	            this.xpression();
	            break;

	        case 2:
	            localctx = new AssignActionableContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 133;
	                this.match(XpressGrammar.DEF);
	            }

	            this.state = 136;
	            this.variable();
	            this.state = 137;
	            this.match(XpressGrammar.ASSIGN);
	            this.state = 138;
	            this.actionable();
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



	actionable() {
	    let localctx = new ActionableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, XpressGrammar.RULE_actionable);
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            localctx.name = this.match(XpressGrammar.IDENTIFIER);
	            this.state = 143;
	            this.parameters();
	            break;

	        case 2:
	            localctx = new InlineFunctionCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            localctx.name = this.match(XpressGrammar.IDENTIFIER);
	            this.state = 145;
	            this.parameters();
	            this.state = 146;
	            this.actionBlack();
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



	parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, XpressGrammar.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(XpressGrammar.LRB);
	        this.state = 151;
	        this.parameter();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45) {
	            this.state = 152;
	            this.match(XpressGrammar.COMMA);
	            this.state = 153;
	            this.parameter();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 159;
	        this.match(XpressGrammar.RRB);
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, XpressGrammar.RULE_parameter);
	    try {
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TextParameterContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            localctx.name = this.match(XpressGrammar.IDENTIFIER);
	            this.state = 162;
	            this.match(XpressGrammar.COLON);
	            this.state = 163;
	            localctx.value = this.match(XpressGrammar.TEXT);
	            break;

	        case 2:
	            localctx = new XpressionParameterContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            localctx.name = this.match(XpressGrammar.IDENTIFIER);
	            this.state = 165;
	            this.match(XpressGrammar.COLON);
	            this.state = 166;
	            localctx.value = this.xpression();
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



	conditional() {
	    let localctx = new ConditionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, XpressGrammar.RULE_conditional);
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 169;
	            this.ifElse();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 170;
	            this.switch_();
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



	ifElse() {
	    let localctx = new IfElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, XpressGrammar.RULE_ifElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(XpressGrammar.IF);
	        this.state = 174;
	        localctx.ifCondition = this.xpression();
	        this.state = 175;
	        localctx.ifBloack = this.actionBlack();
	        this.state = 183;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 176;
	                this.match(XpressGrammar.ELSE);
	                this.state = 177;
	                this.match(XpressGrammar.IF);
	                this.state = 178;
	                localctx.elseIfCondition = this.xpression();
	                this.state = 179;
	                localctx.elseIfBloack = this.actionBlack(); 
	            }
	            this.state = 185;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 186;
	            this.match(XpressGrammar.ELSE);
	            this.state = 187;
	            localctx.elseBlock = this.actionBlack();
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



	switch_() {
	    let localctx = new SwitchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, XpressGrammar.RULE_switch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(XpressGrammar.SWITCH);
	        this.state = 191;
	        this.match(XpressGrammar.LCB);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 192;
	            this.match(XpressGrammar.CASE);
	            this.state = 193;
	            this.xpression();
	            this.state = 194;
	            localctx.caseBlock = this.actionBlack();
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 201;
	            this.match(XpressGrammar.ELSE);
	            this.state = 202;
	            localctx.defaultBlock = this.actionBlack();
	        }

	        this.state = 205;
	        this.match(XpressGrammar.RCB);
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



	iterable() {
	    let localctx = new IterableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, XpressGrammar.RULE_iterable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(XpressGrammar.FOR);
	        this.state = 208;
	        this.parameters();
	        this.state = 209;
	        this.match(XpressGrammar.IN);
	        this.state = 210;
	        this.xpression();
	        this.state = 211;
	        this.actionBlack();
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



	controllable() {
	    let localctx = new ControllableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, XpressGrammar.RULE_controllable);
	    var _la = 0;
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            localctx = new ReturnContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.match(XpressGrammar.RETURN);
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 214;
	                this.xpression();
	            }

	            break;
	        case 41:
	            localctx = new BreakContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 217;
	            this.match(XpressGrammar.BREAK);
	            break;
	        case 42:
	            localctx = new ContinueContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 218;
	            this.match(XpressGrammar.CONTINUE);
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



	xpression() {
	    let localctx = new XpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, XpressGrammar.RULE_xpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(XpressGrammar.LSB);
	        this.state = 222;
	        this.expression();
	        this.state = 223;
	        this.match(XpressGrammar.RSB);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, XpressGrammar.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        localctx.name = this.match(XpressGrammar.IDENTIFIER);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46) {
	            this.state = 226;
	            this.match(XpressGrammar.COLON);
	            this.state = 227;
	            localctx.type = this.match(XpressGrammar.IDENTIFIER);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, XpressGrammar.RULE_comment);
	    try {
	        this.state = 232;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            localctx = new SingleLineCommentContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 230;
	            this.match(XpressGrammar.SingleLineComment);
	            break;
	        case 48:
	            localctx = new MultiLineCommentContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
	            this.match(XpressGrammar.MultiLineComment);
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



	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, XpressGrammar.RULE_root);
	    try {
	        localctx = new EvaluateExpressionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.expression();
	        this.state = 235;
	        this.match(XpressGrammar.EOF);
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
	    this.enterRule(localctx, 40, XpressGrammar.RULE_expression);
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new InfixExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 237;
	            this.infixExpression();
	            break;

	        case 2:
	            localctx = new ScopedExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 238;
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
	    this.enterRule(localctx, 42, XpressGrammar.RULE_scope);
	    try {
	        this.state = 253;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            localctx = new RoundBracketExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.match(XpressGrammar.LRB);
	            this.state = 242;
	            this.infixExpression();
	            this.state = 243;
	            this.match(XpressGrammar.RRB);
	            break;
	        case 25:
	            localctx = new SquareBracketExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
	            this.match(XpressGrammar.LSB);
	            this.state = 246;
	            this.infixExpression();
	            this.state = 247;
	            this.match(XpressGrammar.RSB);
	            break;
	        case 27:
	            localctx = new CurlyBracketExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 249;
	            this.match(XpressGrammar.LCB);
	            this.state = 250;
	            this.infixExpression();
	            this.state = 251;
	            this.match(XpressGrammar.RCB);
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
	    this.enterRule(localctx, 44, XpressGrammar.RULE_infixExpression);
	    try {
	        this.state = 257;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LogicalExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 255;
	            this.logical(0);
	            break;

	        case 2:
	            localctx = new TernaryExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 256;
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
	    this.enterRule(localctx, 46, XpressGrammar.RULE_ternary);
	    try {
	        localctx = new TernaryExpressionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.logical(0);
	        this.state = 260;
	        this.match(XpressGrammar.QUE);
	        this.state = 261;
	        this.logical(0);
	        this.state = 262;
	        this.match(XpressGrammar.COLON);
	        this.state = 263;
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
	    const _startState = 48;
	    this.enterRecursionRule(localctx, 48, XpressGrammar.RULE_logical, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 6:
	        case 9:
	        case 23:
	        case 25:
	        case 27:
	        case 32:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	            localctx = new EqualityExpression_IgnoredContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 266;
	            this.equality(0);
	            break;
	        case 16:
	            localctx = new LogicalExpressionNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 267;
	            localctx.operator = this.match(XpressGrammar.NOT);
	            this.state = 268;
	            localctx.left = this.logical(3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 279;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 277;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new LogicalExpressionAndContext(this, new LogicalContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_logical);
	                    this.state = 271;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 272;
	                    localctx.operator = this.match(XpressGrammar.AND);
	                    this.state = 273;
	                    localctx.right = this.equality(0);
	                    break;

	                case 2:
	                    localctx = new LogicalExpressionOrContext(this, new LogicalContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_logical);
	                    this.state = 274;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 275;
	                    localctx.operator = this.match(XpressGrammar.OR);
	                    this.state = 276;
	                    localctx.right = this.equality(0);
	                    break;

	                } 
	            }
	            this.state = 281;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, XpressGrammar.RULE_equality, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new ComparisonExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 283;
	        this.comparison();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 293;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 291;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new EqualityExpressionEqualToContext(this, new EqualityContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_equality);
	                    this.state = 285;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 286;
	                    localctx.operator = this.match(XpressGrammar.EQ);
	                    this.state = 287;
	                    localctx.right = this.comparison();
	                    break;

	                case 2:
	                    localctx = new EqualityExpressionNotEqualToContext(this, new EqualityContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_equality);
	                    this.state = 288;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 289;
	                    localctx.operator = this.match(XpressGrammar.NEQ);
	                    this.state = 290;
	                    localctx.right = this.comparison();
	                    break;

	                } 
	            }
	            this.state = 295;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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
	    this.enterRule(localctx, 52, XpressGrammar.RULE_comparison);
	    try {
	        this.state = 313;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AdditionExpression_IgnoredContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 296;
	            this.addition(0);
	            break;

	        case 2:
	            localctx = new ComparisonExpressionLessThanContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            localctx.left = this.addition(0);
	            this.state = 298;
	            localctx.operator = this.match(XpressGrammar.LT);
	            this.state = 299;
	            localctx.right = this.addition(0);
	            break;

	        case 3:
	            localctx = new ComparisonExpressionLessThanOrEqualContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 301;
	            localctx.left = this.addition(0);
	            this.state = 302;
	            localctx.operator = this.match(XpressGrammar.LE);
	            this.state = 303;
	            localctx.right = this.addition(0);
	            break;

	        case 4:
	            localctx = new ComparisonExpressionGreaterThanContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 305;
	            localctx.left = this.addition(0);
	            this.state = 306;
	            localctx.operator = this.match(XpressGrammar.GT);
	            this.state = 307;
	            localctx.right = this.addition(0);
	            break;

	        case 5:
	            localctx = new ComparisonExpressionGreaterThanOrEqualContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 309;
	            localctx.left = this.addition(0);
	            this.state = 310;
	            localctx.operator = this.match(XpressGrammar.GE);
	            this.state = 311;
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
	    const _startState = 54;
	    this.enterRecursionRule(localctx, 54, XpressGrammar.RULE_addition, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new MultiplicationExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 316;
	        this.multiplication(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 326;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 324;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditionExpressionContext(this, new AdditionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_addition);
	                    this.state = 318;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 319;
	                    localctx.operator = this.match(XpressGrammar.ADD);
	                    this.state = 320;
	                    localctx.right = this.multiplication(0);
	                    break;

	                case 2:
	                    localctx = new SubtractionExpressionContext(this, new AdditionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_addition);
	                    this.state = 321;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 322;
	                    localctx.operator = this.match(XpressGrammar.SUB);
	                    this.state = 323;
	                    localctx.right = this.multiplication(0);
	                    break;

	                } 
	            }
	            this.state = 328;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
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
	    const _startState = 56;
	    this.enterRecursionRule(localctx, 56, XpressGrammar.RULE_multiplication, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new ExponentiationExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 330;
	        this.exponentiation(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 341;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicationExpressionContext(this, new MultiplicationContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_multiplication);
	                    this.state = 332;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 333;
	                    localctx.operator = this.match(XpressGrammar.MUL);
	                    this.state = 334;
	                    localctx.right = this.exponentiation(0);
	                    break;

	                case 2:
	                    localctx = new DivisionExpressionContext(this, new MultiplicationContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_multiplication);
	                    this.state = 335;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 336;
	                    localctx.operator = this.match(XpressGrammar.DIV);
	                    this.state = 337;
	                    localctx.right = this.exponentiation(0);
	                    break;

	                case 3:
	                    localctx = new ModulousExpressionContext(this, new MultiplicationContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_multiplication);
	                    this.state = 338;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 339;
	                    localctx.operator = this.match(XpressGrammar.MOD);
	                    this.state = 340;
	                    localctx.right = this.exponentiation(0);
	                    break;

	                } 
	            }
	            this.state = 345;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
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
	    const _startState = 58;
	    this.enterRecursionRule(localctx, 58, XpressGrammar.RULE_exponentiation, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new OperationExpression_IgnoredContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 347;
	        this.operation();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 354;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExponentiationExpressionContext(this, new ExponentiationContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, XpressGrammar.RULE_exponentiation);
	                this.state = 349;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 350;
	                localctx.operator = this.match(XpressGrammar.POW);
	                this.state = 351;
	                localctx.right = this.operation(); 
	            }
	            this.state = 356;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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
	    this.enterRule(localctx, 60, XpressGrammar.RULE_operation);
	    try {
	        this.state = 361;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 357;
	            this.literal();
	            break;
	        case 4:
	        case 5:
	        case 6:
	        case 54:
	            localctx = new AccessorExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 358;
	            this.accessor();
	            break;
	        case 32:
	            localctx = new FunctionExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 359;
	            this.function_();
	            break;
	        case 23:
	        case 25:
	        case 27:
	            localctx = new ScopedExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 360;
	            this.scope();
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



	accessor() {
	    let localctx = new AccessorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, XpressGrammar.RULE_accessor);
	    var _la = 0;
	    try {
	        localctx = new ObjectAccessorContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0)) {
	            this.state = 363;
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

	        this.state = 366;
	        this.property();
	        this.state = 371;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 367;
	                this.match(XpressGrammar.ACCESSOR);
	                this.state = 368;
	                this.property(); 
	            }
	            this.state = 373;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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
	    this.enterRule(localctx, 64, XpressGrammar.RULE_property);
	    try {
	        this.state = 380;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PropertyAccessorContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 374;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new SubscriptAccessorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 375;
	            this.identifier();
	            this.state = 376;
	            this.match(XpressGrammar.LSB);
	            this.state = 377;
	            localctx.index = this.expression();
	            this.state = 378;
	            this.match(XpressGrammar.LSB);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, XpressGrammar.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(XpressGrammar.IDENTIFIER);
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
	    this.enterRule(localctx, 68, XpressGrammar.RULE_literal);
	    try {
	        this.state = 388;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            localctx = new BooleanExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 384;
	            this.match(XpressGrammar.BOOLEAN);
	            break;
	        case 52:
	            localctx = new NullExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 385;
	            this.match(XpressGrammar.NULL);
	            break;
	        case 9:
	        case 51:
	            localctx = new NumberExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 386;
	            this.number();
	            break;
	        case 50:
	            localctx = new TextExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 387;
	            this.match(XpressGrammar.TEXT);
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
	    this.enterRule(localctx, 70, XpressGrammar.RULE_number);
	    try {
	        this.state = 393;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            localctx = new PositiveNumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 390;
	            this.match(XpressGrammar.NUMBER);
	            break;
	        case 9:
	            localctx = new NegativeNumberContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 391;
	            this.match(XpressGrammar.SUB);
	            this.state = 392;
	            this.match(XpressGrammar.NUMBER);
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

XpressGrammar.EOF = antlr4.Token.EOF;
XpressGrammar.SQUOTE = 1;
XpressGrammar.DQUOTE = 2;
XpressGrammar.ACCESSOR = 3;
XpressGrammar.DOLLOR = 4;
XpressGrammar.HASH = 5;
XpressGrammar.AT = 6;
XpressGrammar.QUE = 7;
XpressGrammar.ADD = 8;
XpressGrammar.SUB = 9;
XpressGrammar.MUL = 10;
XpressGrammar.DIV = 11;
XpressGrammar.MOD = 12;
XpressGrammar.POW = 13;
XpressGrammar.AND = 14;
XpressGrammar.OR = 15;
XpressGrammar.NOT = 16;
XpressGrammar.GT = 17;
XpressGrammar.GE = 18;
XpressGrammar.LT = 19;
XpressGrammar.LE = 20;
XpressGrammar.EQ = 21;
XpressGrammar.NEQ = 22;
XpressGrammar.LRB = 23;
XpressGrammar.RRB = 24;
XpressGrammar.LSB = 25;
XpressGrammar.RSB = 26;
XpressGrammar.LCB = 27;
XpressGrammar.RCB = 28;
XpressGrammar.WS = 29;
XpressGrammar.IMPORT = 30;
XpressGrammar.FROM = 31;
XpressGrammar.FUNCTION = 32;
XpressGrammar.DEF = 33;
XpressGrammar.IF = 34;
XpressGrammar.ELSE = 35;
XpressGrammar.SWITCH = 36;
XpressGrammar.CASE = 37;
XpressGrammar.FOR = 38;
XpressGrammar.IN = 39;
XpressGrammar.RETURN = 40;
XpressGrammar.BREAK = 41;
XpressGrammar.CONTINUE = 42;
XpressGrammar.ASSIGN = 43;
XpressGrammar.APPEND = 44;
XpressGrammar.COMMA = 45;
XpressGrammar.COLON = 46;
XpressGrammar.UNDERSCORE = 47;
XpressGrammar.MultiLineComment = 48;
XpressGrammar.SingleLineComment = 49;
XpressGrammar.TEXT = 50;
XpressGrammar.NUMBER = 51;
XpressGrammar.NULL = 52;
XpressGrammar.BOOLEAN = 53;
XpressGrammar.IDENTIFIER = 54;

XpressGrammar.RULE_configRoot = 0;
XpressGrammar.RULE_config = 1;
XpressGrammar.RULE_imports = 2;
XpressGrammar.RULE_function = 3;
XpressGrammar.RULE_arguments = 4;
XpressGrammar.RULE_actionBlack = 5;
XpressGrammar.RULE_action = 6;
XpressGrammar.RULE_assignable = 7;
XpressGrammar.RULE_actionable = 8;
XpressGrammar.RULE_parameters = 9;
XpressGrammar.RULE_parameter = 10;
XpressGrammar.RULE_conditional = 11;
XpressGrammar.RULE_ifElse = 12;
XpressGrammar.RULE_switch = 13;
XpressGrammar.RULE_iterable = 14;
XpressGrammar.RULE_controllable = 15;
XpressGrammar.RULE_xpression = 16;
XpressGrammar.RULE_variable = 17;
XpressGrammar.RULE_comment = 18;
XpressGrammar.RULE_root = 19;
XpressGrammar.RULE_expression = 20;
XpressGrammar.RULE_scope = 21;
XpressGrammar.RULE_infixExpression = 22;
XpressGrammar.RULE_ternary = 23;
XpressGrammar.RULE_logical = 24;
XpressGrammar.RULE_equality = 25;
XpressGrammar.RULE_comparison = 26;
XpressGrammar.RULE_addition = 27;
XpressGrammar.RULE_multiplication = 28;
XpressGrammar.RULE_exponentiation = 29;
XpressGrammar.RULE_operation = 30;
XpressGrammar.RULE_accessor = 31;
XpressGrammar.RULE_property = 32;
XpressGrammar.RULE_identifier = 33;
XpressGrammar.RULE_literal = 34;
XpressGrammar.RULE_number = 35;

class ConfigRootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_configRoot;
    }

	EOF() {
	    return this.getToken(XpressGrammar.EOF, 0);
	};

	config = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConfigContext);
	    } else {
	        return this.getTypedRuleContext(ConfigContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterConfigRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitConfigRoot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitConfigRoot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConfigContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_config;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ImportConfigContext extends ConfigContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	imports() {
	    return this.getTypedRuleContext(ImportsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterImportConfig(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitImportConfig(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitImportConfig(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ImportConfigContext = ImportConfigContext;

class FunctionConfigContext extends ConfigContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterFunctionConfig(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitFunctionConfig(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitFunctionConfig(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.FunctionConfigContext = FunctionConfigContext;

class CommentConfigContext extends ConfigContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterCommentConfig(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitCommentConfig(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitCommentConfig(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.CommentConfigContext = CommentConfigContext;

class ImportsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_imports;
        this.path = null;
    }

	IMPORT() {
	    return this.getToken(XpressGrammar.IMPORT, 0);
	};

	FROM() {
	    return this.getToken(XpressGrammar.FROM, 0);
	};

	MUL() {
	    return this.getToken(XpressGrammar.MUL, 0);
	};

	IDENTIFIER() {
	    return this.getToken(XpressGrammar.IDENTIFIER, 0);
	};

	TEXT() {
	    return this.getToken(XpressGrammar.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterImports(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitImports(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitImports(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.ruleIndex = XpressGrammar.RULE_function;
        this.name = null;
        this.body = null;
    }

	FUNCTION() {
	    return this.getToken(XpressGrammar.FUNCTION, 0);
	};

	IDENTIFIER() {
	    return this.getToken(XpressGrammar.IDENTIFIER, 0);
	};

	actionBlack() {
	    return this.getTypedRuleContext(ActionBlackContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_arguments;
    }

	LRB() {
	    return this.getToken(XpressGrammar.LRB, 0);
	};

	RRB() {
	    return this.getToken(XpressGrammar.RRB, 0);
	};

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressGrammar.COMMA);
	    } else {
	        return this.getToken(XpressGrammar.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionBlackContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_actionBlack;
    }

	LCB() {
	    return this.getToken(XpressGrammar.LCB, 0);
	};

	RCB() {
	    return this.getToken(XpressGrammar.RCB, 0);
	};

	action = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionContext);
	    } else {
	        return this.getTypedRuleContext(ActionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterActionBlack(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitActionBlack(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitActionBlack(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_action;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ActionableActionContext extends ActionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	actionable() {
	    return this.getTypedRuleContext(ActionableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterActionableAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitActionableAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitActionableAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ActionableActionContext = ActionableActionContext;

class AssignmentActionContext extends ActionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	assignable() {
	    return this.getTypedRuleContext(AssignableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterAssignmentAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitAssignmentAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitAssignmentAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.AssignmentActionContext = AssignmentActionContext;

class ControllableActionContext extends ActionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	controllable() {
	    return this.getTypedRuleContext(ControllableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterControllableAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitControllableAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitControllableAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ControllableActionContext = ControllableActionContext;

class ConditionalActionContext extends ActionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	conditional() {
	    return this.getTypedRuleContext(ConditionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterConditionalAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitConditionalAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitConditionalAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ConditionalActionContext = ConditionalActionContext;

class CommentActionContext extends ActionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterCommentAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitCommentAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitCommentAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.CommentActionContext = CommentActionContext;

class IterableActionContext extends ActionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	iterable() {
	    return this.getTypedRuleContext(IterableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterIterableAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitIterableAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitIterableAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.IterableActionContext = IterableActionContext;

class AssignableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_assignable;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AssignActionableContext extends AssignableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ASSIGN() {
	    return this.getToken(XpressGrammar.ASSIGN, 0);
	};

	actionable() {
	    return this.getTypedRuleContext(ActionableContext,0);
	};

	DEF() {
	    return this.getToken(XpressGrammar.DEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterAssignActionable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitAssignActionable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitAssignActionable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.AssignActionableContext = AssignActionableContext;

class AssignExpressionContext extends AssignableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ASSIGN() {
	    return this.getToken(XpressGrammar.ASSIGN, 0);
	};

	xpression() {
	    return this.getTypedRuleContext(XpressionContext,0);
	};

	DEF() {
	    return this.getToken(XpressGrammar.DEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterAssignExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitAssignExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitAssignExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.AssignExpressionContext = AssignExpressionContext;

class ActionableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_actionable;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FunctionCallContext extends ActionableContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        super.copyFrom(ctx);
    }

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(XpressGrammar.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.FunctionCallContext = FunctionCallContext;

class InlineFunctionCallContext extends ActionableContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        super.copyFrom(ctx);
    }

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	actionBlack() {
	    return this.getTypedRuleContext(ActionBlackContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(XpressGrammar.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterInlineFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitInlineFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitInlineFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.InlineFunctionCallContext = InlineFunctionCallContext;

class ParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_parameters;
    }

	LRB() {
	    return this.getToken(XpressGrammar.LRB, 0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	RRB() {
	    return this.getToken(XpressGrammar.RRB, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressGrammar.COMMA);
	    } else {
	        return this.getToken(XpressGrammar.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitParameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitParameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_parameter;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class XpressionParameterContext extends ParameterContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        this.value = null;;
        super.copyFrom(ctx);
    }

	COLON() {
	    return this.getToken(XpressGrammar.COLON, 0);
	};

	IDENTIFIER() {
	    return this.getToken(XpressGrammar.IDENTIFIER, 0);
	};

	xpression() {
	    return this.getTypedRuleContext(XpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterXpressionParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitXpressionParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitXpressionParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.XpressionParameterContext = XpressionParameterContext;

class TextParameterContext extends ParameterContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        this.value = null;;
        super.copyFrom(ctx);
    }

	COLON() {
	    return this.getToken(XpressGrammar.COLON, 0);
	};

	IDENTIFIER() {
	    return this.getToken(XpressGrammar.IDENTIFIER, 0);
	};

	TEXT() {
	    return this.getToken(XpressGrammar.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterTextParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitTextParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitTextParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.TextParameterContext = TextParameterContext;

class ConditionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_conditional;
    }

	ifElse() {
	    return this.getTypedRuleContext(IfElseContext,0);
	};

	switch_() {
	    return this.getTypedRuleContext(SwitchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitConditional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitConditional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_ifElse;
        this.ifCondition = null;
        this.ifBloack = null;
        this.elseIfCondition = null;
        this.elseIfBloack = null;
        this.elseBlock = null;
    }

	IF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressGrammar.IF);
	    } else {
	        return this.getToken(XpressGrammar.IF, i);
	    }
	};


	xpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(XpressionContext);
	    } else {
	        return this.getTypedRuleContext(XpressionContext,i);
	    }
	};

	actionBlack = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionBlackContext);
	    } else {
	        return this.getTypedRuleContext(ActionBlackContext,i);
	    }
	};

	ELSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressGrammar.ELSE);
	    } else {
	        return this.getToken(XpressGrammar.ELSE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterIfElse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitIfElse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitIfElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwitchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_switch;
        this.caseBlock = null;
        this.defaultBlock = null;
    }

	SWITCH() {
	    return this.getToken(XpressGrammar.SWITCH, 0);
	};

	LCB() {
	    return this.getToken(XpressGrammar.LCB, 0);
	};

	RCB() {
	    return this.getToken(XpressGrammar.RCB, 0);
	};

	CASE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressGrammar.CASE);
	    } else {
	        return this.getToken(XpressGrammar.CASE, i);
	    }
	};


	xpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(XpressionContext);
	    } else {
	        return this.getTypedRuleContext(XpressionContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(XpressGrammar.ELSE, 0);
	};

	actionBlack = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionBlackContext);
	    } else {
	        return this.getTypedRuleContext(ActionBlackContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterSwitch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitSwitch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitSwitch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IterableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_iterable;
    }

	FOR() {
	    return this.getToken(XpressGrammar.FOR, 0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	IN() {
	    return this.getToken(XpressGrammar.IN, 0);
	};

	xpression() {
	    return this.getTypedRuleContext(XpressionContext,0);
	};

	actionBlack() {
	    return this.getTypedRuleContext(ActionBlackContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterIterable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitIterable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitIterable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ControllableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_controllable;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BreakContext extends ControllableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BREAK() {
	    return this.getToken(XpressGrammar.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterBreak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitBreak(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitBreak(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.BreakContext = BreakContext;

class ContinueContext extends ControllableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CONTINUE() {
	    return this.getToken(XpressGrammar.CONTINUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterContinue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitContinue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitContinue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ContinueContext = ContinueContext;

class ReturnContext extends ControllableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RETURN() {
	    return this.getToken(XpressGrammar.RETURN, 0);
	};

	xpression() {
	    return this.getTypedRuleContext(XpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitReturn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitReturn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ReturnContext = ReturnContext;

class XpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_xpression;
    }

	LSB() {
	    return this.getToken(XpressGrammar.LSB, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RSB() {
	    return this.getToken(XpressGrammar.RSB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterXpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitXpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitXpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_variable;
        this.name = null;
        this.type = null;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XpressGrammar.IDENTIFIER);
	    } else {
	        return this.getToken(XpressGrammar.IDENTIFIER, i);
	    }
	};


	COLON() {
	    return this.getToken(XpressGrammar.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XpressGrammar.RULE_comment;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MultiLineCommentContext extends CommentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MultiLineComment() {
	    return this.getToken(XpressGrammar.MultiLineComment, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterMultiLineComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitMultiLineComment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitMultiLineComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.MultiLineCommentContext = MultiLineCommentContext;

class SingleLineCommentContext extends CommentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SingleLineComment() {
	    return this.getToken(XpressGrammar.SingleLineComment, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterSingleLineComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitSingleLineComment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitSingleLineComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.SingleLineCommentContext = SingleLineCommentContext;

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
        this.ruleIndex = XpressGrammar.RULE_root;
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
	    return this.getToken(XpressGrammar.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterEvaluateExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitEvaluateExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitEvaluateExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.EvaluateExpressionContext = EvaluateExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_expression;
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
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterScopedExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitScopedExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitScopedExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ScopedExpression_IgnoredContext = ScopedExpression_IgnoredContext;

class InfixExpression_IgnoredContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterInfixExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitInfixExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitInfixExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.InfixExpression_IgnoredContext = InfixExpression_IgnoredContext;

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
        this.ruleIndex = XpressGrammar.RULE_scope;
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
	    return this.getToken(XpressGrammar.LCB, 0);
	};

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	RCB() {
	    return this.getToken(XpressGrammar.RCB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterCurlyBracketExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitCurlyBracketExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitCurlyBracketExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.CurlyBracketExpressionContext = CurlyBracketExpressionContext;

class RoundBracketExpressionContext extends ScopeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LRB() {
	    return this.getToken(XpressGrammar.LRB, 0);
	};

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	RRB() {
	    return this.getToken(XpressGrammar.RRB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterRoundBracketExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitRoundBracketExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitRoundBracketExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.RoundBracketExpressionContext = RoundBracketExpressionContext;

class SquareBracketExpressionContext extends ScopeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LSB() {
	    return this.getToken(XpressGrammar.LSB, 0);
	};

	infixExpression() {
	    return this.getTypedRuleContext(InfixExpressionContext,0);
	};

	RSB() {
	    return this.getToken(XpressGrammar.RSB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterSquareBracketExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitSquareBracketExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitSquareBracketExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.SquareBracketExpressionContext = SquareBracketExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_infixExpression;
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
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterTernaryExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitTernaryExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitTernaryExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.TernaryExpression_IgnoredContext = TernaryExpression_IgnoredContext;

class LogicalExpression_IgnoredContext extends InfixExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterLogicalExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitLogicalExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitLogicalExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.LogicalExpression_IgnoredContext = LogicalExpression_IgnoredContext;

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
        this.ruleIndex = XpressGrammar.RULE_ternary;
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
	    return this.getToken(XpressGrammar.QUE, 0);
	};

	COLON() {
	    return this.getToken(XpressGrammar.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterTernaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitTernaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitTernaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.TernaryExpressionContext = TernaryExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_logical;
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
	    return this.getToken(XpressGrammar.OR, 0);
	};

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterLogicalExpressionOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitLogicalExpressionOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitLogicalExpressionOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.LogicalExpressionOrContext = LogicalExpressionOrContext;

class EqualityExpression_IgnoredContext extends LogicalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterEqualityExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitEqualityExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitEqualityExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.EqualityExpression_IgnoredContext = EqualityExpression_IgnoredContext;

class LogicalExpressionNotContext extends LogicalContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
        this.left = null;;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(XpressGrammar.NOT, 0);
	};

	logical() {
	    return this.getTypedRuleContext(LogicalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterLogicalExpressionNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitLogicalExpressionNot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitLogicalExpressionNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.LogicalExpressionNotContext = LogicalExpressionNotContext;

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
	    return this.getToken(XpressGrammar.AND, 0);
	};

	equality() {
	    return this.getTypedRuleContext(EqualityContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterLogicalExpressionAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitLogicalExpressionAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitLogicalExpressionAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.LogicalExpressionAndContext = LogicalExpressionAndContext;

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
        this.ruleIndex = XpressGrammar.RULE_equality;
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
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterComparisonExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitComparisonExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitComparisonExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ComparisonExpression_IgnoredContext = ComparisonExpression_IgnoredContext;

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
	    return this.getToken(XpressGrammar.EQ, 0);
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterEqualityExpressionEqualTo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitEqualityExpressionEqualTo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitEqualityExpressionEqualTo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.EqualityExpressionEqualToContext = EqualityExpressionEqualToContext;

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
	    return this.getToken(XpressGrammar.NEQ, 0);
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterEqualityExpressionNotEqualTo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitEqualityExpressionNotEqualTo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitEqualityExpressionNotEqualTo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.EqualityExpressionNotEqualToContext = EqualityExpressionNotEqualToContext;

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
        this.ruleIndex = XpressGrammar.RULE_comparison;
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
	    return this.getToken(XpressGrammar.GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterComparisonExpressionGreaterThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitComparisonExpressionGreaterThanOrEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitComparisonExpressionGreaterThanOrEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ComparisonExpressionGreaterThanOrEqualContext = ComparisonExpressionGreaterThanOrEqualContext;

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
	    return this.getToken(XpressGrammar.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterComparisonExpressionLessThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitComparisonExpressionLessThan(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitComparisonExpressionLessThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ComparisonExpressionLessThanContext = ComparisonExpressionLessThanContext;

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
	    return this.getToken(XpressGrammar.LE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterComparisonExpressionLessThanOrEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitComparisonExpressionLessThanOrEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitComparisonExpressionLessThanOrEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ComparisonExpressionLessThanOrEqualContext = ComparisonExpressionLessThanOrEqualContext;

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
	    return this.getToken(XpressGrammar.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterComparisonExpressionGreaterThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitComparisonExpressionGreaterThan(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitComparisonExpressionGreaterThan(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ComparisonExpressionGreaterThanContext = ComparisonExpressionGreaterThanContext;

class AdditionExpression_IgnoredContext extends ComparisonContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	addition() {
	    return this.getTypedRuleContext(AdditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterAdditionExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitAdditionExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitAdditionExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.AdditionExpression_IgnoredContext = AdditionExpression_IgnoredContext;

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
        this.ruleIndex = XpressGrammar.RULE_addition;
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
	    return this.getToken(XpressGrammar.ADD, 0);
	};

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterAdditionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitAdditionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitAdditionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.AdditionExpressionContext = AdditionExpressionContext;

class MultiplicationExpression_IgnoredContext extends AdditionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterMultiplicationExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitMultiplicationExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitMultiplicationExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.MultiplicationExpression_IgnoredContext = MultiplicationExpression_IgnoredContext;

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
	    return this.getToken(XpressGrammar.SUB, 0);
	};

	multiplication() {
	    return this.getTypedRuleContext(MultiplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterSubtractionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitSubtractionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitSubtractionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.SubtractionExpressionContext = SubtractionExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_multiplication;
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
	    return this.getToken(XpressGrammar.MUL, 0);
	};

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterMultiplicationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitMultiplicationExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitMultiplicationExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.MultiplicationExpressionContext = MultiplicationExpressionContext;

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
	    return this.getToken(XpressGrammar.MOD, 0);
	};

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterModulousExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitModulousExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitModulousExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ModulousExpressionContext = ModulousExpressionContext;

class ExponentiationExpression_IgnoredContext extends MultiplicationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterExponentiationExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitExponentiationExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitExponentiationExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ExponentiationExpression_IgnoredContext = ExponentiationExpression_IgnoredContext;

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
	    return this.getToken(XpressGrammar.DIV, 0);
	};

	exponentiation() {
	    return this.getTypedRuleContext(ExponentiationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterDivisionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitDivisionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitDivisionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.DivisionExpressionContext = DivisionExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_exponentiation;
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
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterOperationExpression_Ignored(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitOperationExpression_Ignored(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitOperationExpression_Ignored(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.OperationExpression_IgnoredContext = OperationExpression_IgnoredContext;

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
	    return this.getToken(XpressGrammar.POW, 0);
	};

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterExponentiationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitExponentiationExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitExponentiationExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ExponentiationExpressionContext = ExponentiationExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_operation;
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
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterAccessorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitAccessorExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitAccessorExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.AccessorExpressionContext = AccessorExpressionContext;

class LiteralExpressionContext extends OperationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.LiteralExpressionContext = LiteralExpressionContext;

class FunctionExpressionContext extends OperationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitFunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.FunctionExpressionContext = FunctionExpressionContext;

class ScopedExpressionContext extends OperationContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterScopedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitScopedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitScopedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ScopedExpressionContext = ScopedExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_accessor;
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
	        return this.getTokens(XpressGrammar.ACCESSOR);
	    } else {
	        return this.getToken(XpressGrammar.ACCESSOR, i);
	    }
	};


	DOLLOR() {
	    return this.getToken(XpressGrammar.DOLLOR, 0);
	};

	HASH() {
	    return this.getToken(XpressGrammar.HASH, 0);
	};

	AT() {
	    return this.getToken(XpressGrammar.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterObjectAccessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitObjectAccessor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitObjectAccessor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.ObjectAccessorContext = ObjectAccessorContext;

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
        this.ruleIndex = XpressGrammar.RULE_property;
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
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterPropertyAccessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitPropertyAccessor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitPropertyAccessor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.PropertyAccessorContext = PropertyAccessorContext;

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
	        return this.getTokens(XpressGrammar.LSB);
	    } else {
	        return this.getToken(XpressGrammar.LSB, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterSubscriptAccessor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitSubscriptAccessor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitSubscriptAccessor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.SubscriptAccessorContext = SubscriptAccessorContext;

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
        this.ruleIndex = XpressGrammar.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(XpressGrammar.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
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
        this.ruleIndex = XpressGrammar.RULE_literal;
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
	    return this.getToken(XpressGrammar.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterTextExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitTextExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitTextExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.TextExpressionContext = TextExpressionContext;

class NullExpressionContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(XpressGrammar.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterNullExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitNullExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitNullExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.NullExpressionContext = NullExpressionContext;

class NumberExpressionContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterNumberExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitNumberExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitNumberExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.NumberExpressionContext = NumberExpressionContext;

class BooleanExpressionContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOLEAN() {
	    return this.getToken(XpressGrammar.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitBooleanExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitBooleanExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.BooleanExpressionContext = BooleanExpressionContext;

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
        this.ruleIndex = XpressGrammar.RULE_number;
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
	    return this.getToken(XpressGrammar.SUB, 0);
	};

	NUMBER() {
	    return this.getToken(XpressGrammar.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterNegativeNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitNegativeNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitNegativeNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.NegativeNumberContext = NegativeNumberContext;

class PositiveNumberContext extends NumberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(XpressGrammar.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.enterPositiveNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XpressGrammarListener ) {
	        listener.exitPositiveNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof XpressGrammarVisitor ) {
	        return visitor.visitPositiveNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

XpressGrammar.PositiveNumberContext = PositiveNumberContext;


XpressGrammar.ConfigRootContext = ConfigRootContext; 
XpressGrammar.ConfigContext = ConfigContext; 
XpressGrammar.ImportsContext = ImportsContext; 
XpressGrammar.FunctionContext = FunctionContext; 
XpressGrammar.ArgumentsContext = ArgumentsContext; 
XpressGrammar.ActionBlackContext = ActionBlackContext; 
XpressGrammar.ActionContext = ActionContext; 
XpressGrammar.AssignableContext = AssignableContext; 
XpressGrammar.ActionableContext = ActionableContext; 
XpressGrammar.ParametersContext = ParametersContext; 
XpressGrammar.ParameterContext = ParameterContext; 
XpressGrammar.ConditionalContext = ConditionalContext; 
XpressGrammar.IfElseContext = IfElseContext; 
XpressGrammar.SwitchContext = SwitchContext; 
XpressGrammar.IterableContext = IterableContext; 
XpressGrammar.ControllableContext = ControllableContext; 
XpressGrammar.XpressionContext = XpressionContext; 
XpressGrammar.VariableContext = VariableContext; 
XpressGrammar.CommentContext = CommentContext; 
XpressGrammar.RootContext = RootContext; 
XpressGrammar.ExpressionContext = ExpressionContext; 
XpressGrammar.ScopeContext = ScopeContext; 
XpressGrammar.InfixExpressionContext = InfixExpressionContext; 
XpressGrammar.TernaryContext = TernaryContext; 
XpressGrammar.LogicalContext = LogicalContext; 
XpressGrammar.EqualityContext = EqualityContext; 
XpressGrammar.ComparisonContext = ComparisonContext; 
XpressGrammar.AdditionContext = AdditionContext; 
XpressGrammar.MultiplicationContext = MultiplicationContext; 
XpressGrammar.ExponentiationContext = ExponentiationContext; 
XpressGrammar.OperationContext = OperationContext; 
XpressGrammar.AccessorContext = AccessorContext; 
XpressGrammar.PropertyContext = PropertyContext; 
XpressGrammar.IdentifierContext = IdentifierContext; 
XpressGrammar.LiteralContext = LiteralContext; 
XpressGrammar.NumberContext = NumberContext; 
