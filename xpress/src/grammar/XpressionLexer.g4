lexer grammar XpressionLexer;

SQUOTE      : '\''      ;
DQUOTE      : '"'       ;

/* Accessor */
ACCESSOR    : '.'       ;
DOLLOR      : '$'       ;
HASH        : '#'       ;
AT          : '@'       ;

/* Ternary */
QUE         : '?'       ;

/* Arithmatic operators */
ADD         : '+'       ;
SUB         : '-'       ;
MUL         : '*'       ;
DIV         : '/'       ;
MOD         : '%'       ;
POW         : '^'       ;

/* Logical operators */
AND         : '&&'      ;
OR          : '||'      ;
NOT         : '!'       ;

/*  Comparison operators */
GT          : '>'       ;
GE          : '>='      ;
LT          : '<'       ;
LE          : '<='      ;
EQ          : '=='      ;
NEQ         : '!='      ;

/* Brackets */
LRB         : '('       ;
RRB         : ')'       ;
LSB         : '['       ;
RSB         : ']'       ;
LCB         : '{'       ;
RCB         : '}'       ;

/* ignore all white space characters */
WS  :   (' ' | '\t' | '\r'| '\n' | '\u000C' ) -> skip ;

/* Reserved Keywords */
IMPORT      : 'import'   ;
FROM        : 'from'     ;
FUNCTION    : 'fun'      ;
DEF         : 'def'      ;

IF          : 'if'       ;
ELSE        : 'else'     ;
SWITCH      : 'switch'   ;
CASE        : 'case'     ;
FOR         : 'for'      ;
IN          : 'in'       ;
RETURN      : 'return'   ;
BREAK       : 'break'    ;
CONTINUE    : 'continue' ;

ASSIGN      : '='        ;
APPEND      : '+='       ;
COMMA       : ','        ;
COLON       : ':'        ;
UNDERSCORE  : '_'        ;

MultiLineComment
    : '/*' .*? '*/' ;
SingleLineComment
    : '//' ~[\r\n]* ;

TEXT
    : DQUOTE (~["] | '\\"')* DQUOTE
    | SQUOTE (~[']        )* SQUOTE
    ;

NUMBER
    : [0-9]+('.'?[0-9]+)? ;

NULL
    : [Nn][Uu][Ll][Ll]
    ;

BOOLEAN
    : [Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee]
    ;

/* Identifier must starts with a-z or A-Z or _ followed by a-z A-Z or _ or 0-9 */
IDENTIFIER
    : VALID_ID_START VALID_ID_CHAR*
    ;

fragment VALID_ID_START
    : ('a' .. 'z')
    | ('A' .. 'Z')
    | '_'
    ;

fragment VALID_ID_CHAR
    :  ('a' .. 'z')
    | ('A' .. 'Z')
    | ('0' .. '9')
    | '_'
    ;