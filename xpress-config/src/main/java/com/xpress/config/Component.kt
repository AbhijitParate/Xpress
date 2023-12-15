package com.xpress.config

import com.google.gson.JsonElement
import com.google.gson.JsonNull
import com.xpress.config.Component.*

sealed class Config {

    open val config: JsonElement
        get() = JsonNull.INSTANCE

    class Import(path: String, imports: String?) : Config()

    class Comment(val comment: String) : Config()

    class Function(
        val name: String,
        val arguments: Arguments,
        val block: ActionBlock
    ) : Config()
}

class ActionBlock(val actions: List<Action>) : Config()

open class Action : Config() {

    class Comment(val comment: String) : Action()

    sealed class Assignable(val variable: Argument) : Action() {
        class Expression(variable: Argument, xpression: Xpression) : Assignable(variable)
        class Function(variable: Argument, actionable: Actionable) : Assignable(variable)
        class Object(variable: Argument, crudable: Crudable) : Assignable(variable)
    }

    sealed class Actionable : Action() {
        class Function(name: String, parameters: Parameters) : Actionable()
        class InlineFunction(name: String, parameters: Parameters, block: ActionBlock): Actionable()
        class External(path: String) : Actionable()
    }

    sealed class Crudable : Action() {
        class Create(metadata: Metadata) : Crudable()
        class Edit(xpression: Xpression, metadata: Metadata?) : Crudable()
        class Delete(xpression: Xpression, metadata: Metadata?) : Crudable()
        class View(xpression: Xpression?, metadata: Metadata?) : Crudable()
    }

    class Conditional(
        val conditions: List<Pair<Xpression, ActionBlock>>,
        val default: ActionBlock?
    ) : Action()

    class Iterable(
        val parameters: Parameters,
        val expression: Xpression,
        val block: ActionBlock
    ) : Action()

    sealed class Controllable() : Action() {
        class Return(val xpression: Xpression) : Controllable()
        object Break : Controllable()
        object Continue : Controllable()
    }
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

    class Arguments(val arguments: List<Argument>) : Component()
    class Argument(val name: String, val type: String?) : Component()
    class Comment(val comment: String) : Component()
    class Error(val message: String) : Component()
}