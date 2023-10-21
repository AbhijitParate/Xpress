package com.xpress.xpressor

import com.google.gson.GsonBuilder
import com.google.gson.JsonElement
import com.google.gson.JsonNull

sealed class Component {

    open val config: JsonElement
        get() = JsonNull.INSTANCE

    class XpressConfig(configs: List<Config>) : Component() {

        var enablePrettyPrinting: Boolean = true

        val json: String
            get() {
                val gsonBuilder = GsonBuilder()
                gsonBuilder.disableHtmlEscaping()
                if (enablePrettyPrinting) gsonBuilder.setPrettyPrinting()
                val gson = gsonBuilder.create()
                return gson.toJson(config)
            }
    }

    sealed class Config() : Component() {
        class Import(
            path: String,
            imports: String?
        ) : Config()

        class Comment(
            val comment: String
        ) : Config()

        class Function(
            statementBlock: String?,
            variables: List<Variable>,
            block: StatementBlock
        ) : Config()
    }

    class StatementBlock(statements: List<Statement>) : Config()

    sealed class Statement : Component() {

        class Comment(val comment: String) : Statement()

        sealed class Assignable(val variable: Variable) : Statement() {
            class Expression(variable: Variable, expression: Xpression) : Assignable(variable)
            class Object(variable: Variable, crudable: Crudable) : Assignable(variable)
            class Action(variable: Variable, actionable: Actionable) : Assignable(variable)
        }

        sealed class Actionable : Statement() {
            class External(path: String) : Statement()
            class Execute(parameters: Parameters, name: String) : Statement()
            class ExecuteInline(parameters: Parameters, block: StatementBlock) : Statement()
        }

        sealed class Crudable : Statement() {
            class Create(metadata: Metadata) : Crudable()
            class Edit(xpression: Xpression, metadata: Metadata?) : Crudable()
            class Delete(xpression: Xpression, metadata: Metadata?) : Crudable()
            class View(xpression: Xpression?, metadata: Metadata?) : Crudable()
        }

        class Conditional(
            val conditions: List<Pair<Xpression, StatementBlock>>,
            val default: StatementBlock?
        ) : Statement()

        class Iterable(
            val parameters: List<Parameter>,
            val expression: Xpression,
            val block: StatementBlock,
            val regex: String? = null
        ) : Statement()

        class Return(xpression: Xpression) : Statement()
    }

    class Xpression(val expression: String) : Component()
    sealed class Metadata(values:List<Value>) : Component() {
        sealed class Value() : Component() {
            class Name(name: String, value: String) : Value()
            class Text(name: String, value: String) : Value()
            class Block(name: String, values:List<Metadata.Xpression>) : Component()
        }
        class Values(val values:List<Metadata.Xpression>) : Component()
        class Xpression(name: String, value: Xpression) : Component()
    }
    class Parameters(parameters: List<Parameter>) : Component()
    sealed class Parameter(val name: String) : Component() {
        class Value(name: String, value: String) : Parameter(name)
        class Expression(name: String, expression: Xpression) : Parameter(name)
    }

    class Variable(val name: String, val type: String?) : Component()
    class Comment(val comment: String) : Component()
    class Error(val message: String) : Component()
}