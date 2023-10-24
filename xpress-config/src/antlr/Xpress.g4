parser grammar Xpress;

import Xpression;

options {
    tokenVocab=XpressionLexer;
}

configRoot
    : config* EOF
    ;

config
    :   comment         #commentConfig
    |   imports         #importConfig
    |   function        #functionConfig
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
    : FUNCTION name=IDENTIFIER (LRB (variable ( COMMA variable )*)? RRB)? body=statementBlack
    ;

/*
{
    action1
    action2
    ...
}
*/
statementBlack
    : LCB (statement+)? RCB
    ;

statement
    : comment               #commentStatemtent
    | assignable            #assignmentStatemtent
    | conditional           #conditionalStatemtent
    | iterable              #iterableStatemtent
    | crudable              #crudableStatement
    | actionable            #actionableStatement
    | return                #returnStatement
    ;

assignable
    // def X = [42]
    : DEF variable ASSIGN LSB xpression RSB    #variableWithXpression
    // def apple = create(data=.., metadata=..)
    | DEF variable ASSIGN crudable              #variableWithObject
    // def foo = bar(p1=[exp1], p2=[exp2], ..)
    | DEF variable ASSIGN actionable            #variableWithAction
    ;

// entity -->

crudable
    : createEntity
    | editEntity
    | deleteEntity
    | viewEntity
    | viewData
    ;

createEntity
    : CREATE entity=IDENTIFIER metadata
    ;

editEntity
    : EDIT entity=IDENTIFIER LSB xpression RSB metadata
    ;

deleteEntity
    : DELETE entity=IDENTIFIER LSB xpression RSB metadata
    ;

viewEntity
    : VIEW entity=IDENTIFIER LSB xpression RSB metadata
    ;

viewData
    : VIEW LSB xpression RSB metadata
    ;

// <-- entity

// metadata ->

metadata
    : LRB metadataBlock RRB
    ;

metadatAssignment
    : name=IDENTIFIER ASSIGN metadataElement
    ;

metadataElement
    : TEXT                       #textElement
    | LSB xpression RSB          #xpressionElement
    | LCB metadataBlock RCB      #blockElement
    ;

metadataBlock
    : (metadatAssignment (COMMA metadatAssignment)*)?
    ;

// <- metadata

// actionable -->

actionable
    // action "action.json"
    : ACTION actionPath=TEXT                #externalAction
    // foobar(p1=[exp1], p2=[exp2], ..)
    | name=IDENTIFIER parameters            #functionCall
    // function add(p1=[exp1], p2=[exp2], ..) { actions }
    | name=IDENTIFIER parameters statementBlack
                                            #inlineFunctionCall
    ;

parameters
    : LRB parameter ( COMMA parameter )* RRB
    ;

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

ifElse
    : IF ifCondition=xpression ifBloack=statementBlack
    ( ELSE IF elseIfCondition=xpression elseIfBloack=statementBlack )*
    ( ELSE elseBlock=statementBlack )?
    ;

switch
    : SWITCH LCB
        ( CASE xpression caseBlock=statementBlack )*
        ( ELSE defaultBlock=statementBlack )?
      RCB
    ;

// conditional -->

iterable
    /*
    items(key:k, value:v in [$object] with "regEx") { actions }
    */
    : ITEMS LRB parameter ( COMMA parameter )*
                IN var=xpression (WITH regex=TEXT)?
            RRB statementBlack            #iterateFields
    /*
    items(item:it, index:i in [$array]) { actions }
    */
    | ITEMS LRB parameter ( COMMA parameter )*
                IN var=xpression
            RRB statementBlack            #iterateArray
    ;

return
    : RETURN (xpression)?
    ;

xpression
    : LSB expression RSB
    ;

variable
	: name=IDENTIFIER (COLON type=IDENTIFIER)?
	;

// Line Comments
/* Block Comments */
comment
    : SingleLineComment                 #singleLineComment
    | MultiLineComment                  #multiLineComment
    ;