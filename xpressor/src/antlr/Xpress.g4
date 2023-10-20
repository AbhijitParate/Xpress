parser grammar Xpress;

import Xpression;

options {
    tokenVocab=XpressionLexer;
}

script
    : (comments|function)* EOF
    ;

// Line Comments
/* Block Comments */
comments
    : SingleLineComment                 #singleLineComment
    | MultiLineComment                  #multiLineComment
    ;

function
    : functionBlock
    | importedFunction
    ;

/*
import "path to .xpr file"
*/
importedFunction
    : IMPORT path=TEXT
    ;

/*
function (p1, p2, ...) {
    // actions
}
*/
functionBlock
    : FUNCTION name=IDENTIFIER parameters? actionBlock
    ;

// (p1, p2, ...)
parameters
    : (LRB variable ( COMMA variable )* RRB)
    ;

/*
{
    action1
    action2
    ...
}
*/
actionBlock
    : LCB actions? RCB
    ;
/*
    action1
    action2
    ...
*/
actions
    : action+
    ;

action
    : assignment
    | conditional
    | iterate
    | return
    | actionable
    ;

assignment
    // def X = [42]
    : DEF variable EQ expression            #setVariableWithExpression
    // def apple = create(data=.., metadata=..)
    | DEF variable EQ object                #setVariableWithObject
    // def foo = bar(p1=[exp1], p2=[exp2], ..)
    | DEF variable EQ actionable            #setVariableWithAction
    ;

//<-- object

object
    : createObject
    | editObject
    | deleteObject
    | viewObject
    ;

createObject
    : CREATE objectData
    ;

editObject
    : EDIT expression objectData
    ;

deleteObject
    : DELETE expression objectData
    ;

viewObject
    : VIEW expression objectData
    ;

objectData
    : LRB (DATA EQ valuesBlock)? COMMA (METADATA EQ TEXT)? RRB
    ;

valuesBlock
    : LCB (IDENTIFIER EQ expression ( COMMA ( IDENTIFIER EQ expression ) )* )? RCB
    ;

variable
	: name=IDENTIFIER (COLON dataType=IDENTIFIER)?
	;

// object -->

actionable
    // action "action.json"
    : ACTION actionPath=TEXT                #callFileAction
    // foobar(p1=[exp1], p2=[exp2], ..)
    | name=IDENTIFIER parameters            #callFunction
    // function add(p1=[exp1], p2=[exp2], ..) { actions }
    | FUNCTION name=IDENTIFIER parameters actionBlock
                                            #callInlineFunction
    ;

arguments
    : LRB ( argument ( COMMA argument )* ) RRB
    ;

argument
    : IDENTIFIER COLON IDENTIFIER       #literalParameter
    | IDENTIFIER COLON                  #formulaParameter
    ;
// <-- conditional

conditional
    : ifElse
    | switch
    ;

switch
    : SWITCH LCB
        ( CASE expression caseBlock=actionBlock )*
        ( ELSE defaultBlock=actionBlock )?
      RCB
    ;

ifElse
    : IF ifCondition=expression ifBloack=actionBlock
      ( ELSE IF elseIfCondition=expression elseIfBloack=actionBlock )*
      ( ELSE elseBlock=actionBlock )?
    ;

// conditional -->

iterate
    /*
    items(key:k, value:v in [$object] with "regEx") { actions }
    */
    : ITEMS ( argument ( COMMA argument )* )? IN objectName=IDENTIFIER (WITH regex=TEXT)? actionBlock
                                        #iterateFields
    /*
    items(item:it, index:i in [$array]) { actions }
    */
    | ITEMS ( argument ( COMMA argument )* )? IN arrayName=IDENTIFIER actionBlock
                                        #iterateArray
    ;



return
    : RETURN ( expression )?
    ;