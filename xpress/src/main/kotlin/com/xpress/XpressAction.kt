package com.xpress

import com.xpress.config.Action

abstract class XpressAction(val config: Action, val context: XpressContext) {

    private var state: Int = State.Created
        set(value) {
            println("$field -> $value")
            field = value
        }

    private lateinit var completable: (Data) -> Unit

    var result: Data = unknown()
        private set

    // suspend
    fun run(
        presenter: XpressPresenter,
        completable: (Data) -> Unit
    ): Data {
        this.completable = completable
        start(context)
        if (result is Error) return result
        if (present(context, presenter)) {
            return unknown()
        }
        end(context)
        return result
    }

    private fun start(context: XpressContext) {
        state = State.Started
        onStart(context)
    }

    open fun onStart(context: XpressContext) = Unit

    private fun present(context: XpressContext, presenter: XpressPresenter): Boolean {
        if (shouldPresent(context)) {
            state = State.Suspended
            onPresent(context, presenter)
            return true
        }
        return false
    }

    open fun shouldPresent(context: XpressContext): Boolean = false

    open fun onPresent(context: XpressContext, presenter: XpressPresenter) = Unit

    private fun end(context: XpressContext) {
        state = State.Finished
        onEnd()
    }

    open fun onEnd() = Unit

    fun complete(data: Data) {
        result = data
        end(context)
        completable.invoke(result)
    }

    sealed class Data(val any: Any?)

    // No data
    open class None internal constructor() : Data(null)

    // set data
    class Success internal constructor(any: Any?) : Data(any)

    // continue execution
    class Warning internal constructor(val warning: String, any: Any? = null) : Data(any)

    // stop execution
    class Error internal constructor(val error: String, any: Any? = null) : Data(any)

    // return with data
    class Return internal constructor(any: Any?) : Data(any)

    // break
    data object Break : Data(null)

    // continue
    data object Continue : Data(null)

    object State {
        val Created = 0
        val Started = 1
        val Suspended = 2
        val Finished = 3
    }

    companion object {

        fun unknown() = None()

        fun success(data: Any? = null) = Success(data)

        fun returnSuccess(data: Any?) = Return(data)

        fun returnError(error: String, data: Any? = null) = Error(error, data)

        internal fun create(action: Action, context: XpressContext): XpressAction {
            return object : XpressAction(action, context) {
                override fun onStart(context: XpressContext) {
                    super.onStart(context)
                    println("action : ${action.javaClass}")
                }
            }
//            when (action) {
//                is Action.Assignable.Action -> TODO()
//                is Action.Assignable.Expression -> TODO()
//                is Action.Assignable.Object -> TODO()
//                is Action.Comment -> TODO()
//                is Action.Conditional -> TODO()
//                is Action.Crudable.Create -> TODO()
//                is Action.Crudable.Delete -> TODO()
//                is Action.Crudable.Edit -> TODO()
//                is Action.Crudable.View -> TODO()
//                is Action.Actionable.Execute -> TODO()
//                is Action.Actionable.ExecuteInline -> TODO()
//                is Action.Actionable.External -> TODO()
//                is Action.Iterable -> TODO()
//                is Action.Return -> TODO()
//                else -> TODO()
//            }
        }

    }

}