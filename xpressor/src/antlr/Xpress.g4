parser grammar Xpress;

import Xpression;

options {
    tokenVocab=XpressionLexer;
}

script
    : (comment|imports|function)* EOF
    ;

/*
import "path to .xpr file"
*/
imports
    : IMPORT path=TEXT
    ;

/*
function foo(p1, p2, ...) {
    // actions
}
*/
function
    : FUNCTION name=IDENTIFIER (LRB arguments RRB)? functionBody
    ;

/*
{
    action1
    action2
    ...
}
*/
functionBody
    : LCB (action+)? RCB
    ;

action
    : assignment
    | comment
    | conditional
    | iterable
    | actionable
    | object
    | return
    ;

assignment
    // def X = [42]
    : DEF variable ASSIGN LSB expression RSB    #variableWithExpression
    // def apple = create(data=.., metadata=..)
    | DEF variable ASSIGN object                #variableWithObject
    // def foo = bar(p1=[exp1], p2=[exp2], ..)
    | DEF variable ASSIGN actionable            #variableWithAction
    ;

// object -->

object
    : createObject
    | editObject
    | deleteObject
    | viewObject
    | viewData
    ;

createObject
    : CREATE objectData
    ;

editObject
    : EDIT LSB expression RSB objectData?
    ;

deleteObject
    : DELETE LSB expression RSB objectData?
    ;

viewObject
    : VIEW LSB expression RSB objectData?
    ;

viewData
    : VIEW objectData
    ;

objectData
    : LRB objectProperty (COMMA objectProperty)* RRB
    ;

objectProperty
    : name=IDENTIFIER ASSIGN (valuesBlock|TEXT)
    ;

valuesBlock
    : LCB (IDENTIFIER ASSIGN LSB expression RSB ( COMMA ( IDENTIFIER ASSIGN LSB expression RSB ) )* )? RCB
    ;

// <-- object

// actionable -->

actionable
    // action "action.json"
    : ACTION actionPath=TEXT                #externalAction
    // foobar(p1=[exp1], p2=[exp2], ..)
    | name=IDENTIFIER parameters            #callFunction
    // function add(p1=[exp1], p2=[exp2], ..) { actions }
    | name=IDENTIFIER parameters functionBody
                                            #inlineFunction
    ;

parameters
    : LRB parameter ( COMMA parameter )* RRB
    ;

parameter
    : IDENTIFIER COLON IDENTIFIER       #literalParameter
    | IDENTIFIER COLON expression       #formulaParameter
    ;

// actionable -->

// <-- conditional

conditional
    : ifElse
    | switch
    ;

switch
    : SWITCH LCB
        ( CASE expression caseBlock=functionBody )*
        ( ELSE defaultBlock=functionBody )?
      RCB
    ;

ifElse
    : IF ifCondition=expression ifBloack=functionBody
    ( ELSE IF elseIfCondition=expression elseIfBloack=functionBody )*
    ( ELSE elseBlock=functionBody )?
    ;

// conditional -->

iterable
    /*
    items(key:k, value:v in [$object] with "regEx") { actions }
    */
    : ITEMS LRB parameter ( COMMA parameter )*
                IN var=expression (WITH regex=TEXT)?
            RRB functionBody            #iterateFields
    /*
    items(item:it, index:i in [$array]) { actions }
    */
    | ITEMS LRB parameter ( COMMA parameter )*
                IN var=expression
            RRB functionBody            #iterateArray
    ;

return
    : RETURN (LSB expression RSB)?
    ;

// (p1, p2:Int, ...)
arguments
    : (variable ( COMMA variable )*)?
    ;

variable
	: name=IDENTIFIER (COLON dataType=IDENTIFIER)?
	;

// Line Comments
/* Block Comments */
comment
    : SingleLineComment                 #singleLineComment
    | MultiLineComment                  #multiLineComment
    ;