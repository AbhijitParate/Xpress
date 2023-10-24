package com.xpress

import com.xpress.config.Action
import com.xpress.config.Config
import com.xpress.config.XpressConfig
import java.util.Stack

class Xpressor constructor(
    private val config: XpressConfig,
    private val context: XpressContext = XpressContext.root()
) {

    lateinit var xpressPresenter: XpressPresenter

    private val xpresso: Xpresso by lazy { Xpresso(context) }

    fun xpress() {
        val functionConfig = config.mainFunctionConfig() ?: run {
            throw RuntimeException("Error : main function not found!")
        }
        execute(functionConfig)
    }

    fun xpress(function: String) {
        val functionConfig = config.functionConfig(function) ?: run {
            throw RuntimeException("Error : $function function not found!")
        }
        execute(functionConfig)
    }

    private fun execute(functionConfig: Config.Function) {
        xpresso.xpressPresenter = xpressPresenter
        xpresso.push(functionConfig)
        xpresso.run(context)
    }

    private class Xpresso(val context: XpressContext) {

        private val actionsStack: Stack<Action> = Stack()

        private lateinit var actionData: XpressAction.Data

        lateinit var xpressPresenter: XpressPresenter

        fun push(config: Config.Function) {
            config.arguments.map {
                context.setVariables(it.name, it.type.orEmpty())
            }
            config.block.actions.map {
                actionsStack.push(it)
            }
        }

        fun run(context: XpressContext) {
            while (true) {
                val action = XpressAction.create(actionsStack.pop(), context) ?: run {
                    xpressPresenter.complete(actionData)
                    return
                }
                when (val data = action.run(xpressPresenter, ::complete)) {
                    // finish with error
                    is XpressAction.Error -> {
                        xpressPresenter.complete(data)
                        return
                    }
                    // finish with return data
                    is XpressAction.Return -> {
                        xpressPresenter.complete(data)
                        return
                    }
                    // continue
                    is XpressAction.Success -> {
                        continue
                    }
                    // async / presenting ui
                    else -> {
                        return
                    }
                }
            }
        }

        fun complete(data: XpressAction.Data) {
            when (data) {
                // finish with error
                is XpressAction.Error -> {
                    xpressPresenter.complete(data)
                }
                // finish with return data
                is XpressAction.Return -> {
                    xpressPresenter.complete(data)
                }
                // continue
                is XpressAction.Success -> {
                    run(context)
                }
                // async / presenting ui
                else -> {
                    if (context.isRoot) return
                    // data can't be Unknown
                    val failure = XpressAction.returnError("Error: Unknown data")
                    xpressPresenter.complete(failure)
                }
            }
        }
    }

}