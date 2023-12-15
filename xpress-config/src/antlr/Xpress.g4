parser grammar Xpress;

import Xpression;

options {
    tokenVocab=XpressionLexer;
}

configRoot
    : config* EOF
    ;

config
    : comment           #commentConfig
    | imports           #importConfig
    | function          #functionConfig
    ;

/*
import "path to .xpr file"
*/
imports
    : IMPORT (MUL|IDENTIFIER) FROM path=TEXT
    ;

/*
function foo(p1, p2, ...) {
    // actions
}
*/
function
    : FUNCTION name=IDENTIFIER arguments? body=actionBlack
    ;

/*
    (p1:type, p2:type, ...)
*/
arguments
    : LRB (variable ( COMMA variable )*)? RRB
    ;

/*
{
    action1
    action2
    ...
}
*/
actionBlack
    : LCB action+ RCB
    ;


action
    : comment           #commentAction
    | assignable        #assignmentAction
    | conditional       #conditionalAction
    | iterable          #iterableAction
    | actionable        #actionableAction
    | controllable      #controllableAction
    ;

/*
def var = ...
*/
assignable
    // def X = [42]
    : DEF? variable ASSIGN xpression    #assignExpression
    // def foo = bar(p1=[exp1], p2=[exp2], ..)
    | DEF? variable ASSIGN actionable   #assignActionable
    ;

// actionable -->
/*
    add(p1=[exp1], p2=[exp2], ..) { actions }
*/
actionable
    : name=IDENTIFIER parameters                #functionCall
    | name=IDENTIFIER parameters actionBlack    #inlineFunctionCall
    ;

/**
(p1:"abc", p2:[xyz])
*/
parameters
    : LRB parameter ( COMMA parameter )* RRB
    ;

/**
p1:"abc"
p2:[xyz]
*/
parameter
    : name=IDENTIFIER COLON value=TEXT            #textParameter
    | name=IDENTIFIER COLON value=xpression       #xpressionParameter
    ;
// actionable -->

// <-- conditional
conditional
    : ifElse
    | switch
    ;

/*
if [expr] { ... } else if [expr] { ... } else { ... }
*/
ifElse
    : IF ifCondition=xpression ifBloack=actionBlack
    ( ELSE IF elseIfCondition=xpression elseIfBloack=actionBlack )*
    ( ELSE elseBlock=actionBlack )?
    ;

/*
switch {
    case [expr] { ... }
    case [expr] { ... }
    else { ... }
}
*/
switch
    : SWITCH LCB
        ( CASE xpression caseBlock=actionBlack )*
        ( ELSE defaultBlock=actionBlack )?
      RCB
    ;
// conditional -->

/*
    for (key:"key", value:"value" regEx="regEx") in [$object] { actions }
    for (index:"Idx", value:"Val") in [$object] { actions }
    for (index:"Idx", value:"Val", count:[count+1]) in [$object] { actions }
*/
iterable
    : FOR parameters IN xpression actionBlack
    ;

/*
    return [42]
*/
controllable
    : RETURN xpression?     #return
    | BREAK                 #break
    | CONTINUE              #continue
    ;

xpression
    : LSB expression RSB
    // TODO: Repalce with * and let Xpression library handle the xpressions
    ;

variable
	: name=IDENTIFIER (COLON type=IDENTIFIER)?
	;
/*
  Comments
*/
comment
    : SingleLineComment                 #singleLineComment
    | MultiLineComment                  #multiLineComment
    ;