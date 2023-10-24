package com.xpress.config

import com.google.gson.JsonElement
import com.google.gson.JsonNull
import com.xpress.config.Component.Argument
import com.xpress.config.Component.Xpression

sealed class Config {

    open val config: JsonElement
        get() = JsonNull.INSTANCE

    class Import(path: String, imports: String?) : Config()

    class Comment(val comment: String) : Config()

    class Function(
        val name: String,
        val arguments: List<Argument>,
        val block: ActionBlock
    ) : Config()
}

class ActionBlock(val actions: List<Action>) : Config()

open class Action : Config() {

    class Comment(val comment: String) : Action()

    sealed class Assignable(val argument: Argument) : Action() {
        class Expression(argument: Argument, xpression: Xpression) : Assignable(argument)
        class Object(argument: Argument, crudable: Crudable) : Assignable(argument)
        class Action(argument: Argument, actionable: Actionable) : Assignable(argument)
    }

    sealed class Actionable : Action() {
        class External(path: String) : Actionable()
        class Execute(parameters: Component.Parameters, name: String) : Actionable()
        class ExecuteInline(parameters: Component.Parameters, block: ActionBlock) : Actionable()
    }

    sealed class Crudable : Action() {
        class Create(metadata: Component.Metadata) : Crudable()
        class Edit(xpression: Xpression, metadata: Component.Metadata?) : Crudable()
        class Delete(xpression: Xpression, metadata: Component.Metadata?) : Crudable()
        class View(xpression: Xpression?, metadata: Component.Metadata?) : Crudable()
    }

    class Conditional(
        val conditions: List<Pair<Xpression, ActionBlock>>,
        val default: ActionBlock?
    ) : Action()

    class Iterable(
        val parameters: List<Component.Parameter>,
        val expression: Xpression,
        val block: ActionBlock,
        val regex: String? = null
    ) : Action()

    class Return(val xpression: Xpression) : Action()
}

sealed class Component : Config() {

    class Xpression(val expression: String) : Component()

    sealed class Metadata(values: List<Value>) : Component() {
        class Values(val values: List<Value>) : Component()
        class Value(val name: String, element: Element) : Component()
        sealed class Element : Component()
        class Block(val values: List<Value>) : Element()
        class Text(val value: String) : Element()
        class Xpression(val value: String) : Element()
    }

    class Parameters(parameters: List<Parameter>) : Component()
    sealed class Parameter(val name: String) : Component() {
        class Value(name: String, value: String) : Parameter(name)
        class Expression(name: String, expression: Xpression) : Parameter(name)
    }

    class Argument(val name: String, val type: String?) : Component()
    class Comment(val comment: String) : Component()
    class Error(val message: String) : Component()
}