package com.xpress.xpressor

import com.google.gson.GsonBuilder
import com.google.gson.JsonArray
import com.google.gson.JsonObject

sealed class WorkflowComponent {

    class XpressConfig(val value: JsonArray) : WorkflowComponent() {

        var enablePrettyPrinting = true

        val json: String
            get() {
                val gsonBuilder = GsonBuilder()
                gsonBuilder.disableHtmlEscaping()
                if (enablePrettyPrinting) gsonBuilder.setPrettyPrinting()
                val gson = gsonBuilder.create()
                return gson.toJson(value)
            }
    }

    sealed class Action(val value: JsonObject) : WorkflowComponent()
    class Xpress(value: JsonObject) : Action(value)
    class Return(value: JsonObject) : Action(value)
    class SetVariableStep(value: JsonObject) : Action(value)
    class Conditional(value: JsonObject) : Action(value)
    class Iterate(value: JsonObject) : Action(value)

    class Formula(val value: String) : WorkflowComponent()

    class Error(val message: String) : WorkflowComponent()

}