package com.xpress

class XpressContext
private constructor(context: XpressContext?) {

    private val parent: XpressContext? = context

    val isRoot: Boolean
        get() = parent == null

    /**
     * <Pair<Name, Type>, Value?>
     */
    private val environment = mutableMapOf<Pair<String, String>, Any?>()

    fun setVariables(name: String, type: String) {
        environment[Pair(name, type)] = null
    }

    companion object {

        internal fun new(context: XpressContext): XpressContext {
            return XpressContext(context)
        }

        internal fun root(): XpressContext {
            // Add default environment variables
            return XpressContext(null)
        }
    }
}