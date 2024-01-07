package com.xpress

import com.xpress.XpressAction.*
import com.xpress.config.*
import java.util.Stack

class Xpressor(
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

        private lateinit var actionData: Data

        lateinit var xpressPresenter: XpressPresenter

        fun push(config: Config.Function) {
            config.arguments.arguments.map {
                context.setVariables(it.name, it.type.orEmpty())
            }
            config.block.actions.map {
                actionsStack.push(it)
            }
        }

        fun run(context: XpressContext) {
            while (true) {
                val action = actionsStack.pop()?.let { XpressAction.create(it, context) } ?: run {
                    xpressPresenter.complete(actionData)
                    return
                }
                when (val data = action.run(xpressPresenter, ::complete)) {
                    // finish with error
                    is Error -> {
                        xpressPresenter.complete(data)
                        return
                    }
                    // finish with return data
                    is Return -> {
                        xpressPresenter.complete(data)
                        return
                    }
                    // break
                    is Break -> {
                        xpressPresenter.complete(data)
                        return
                    }
                    // continue
                    is Continue -> {
                        xpressPresenter.complete(data)
                        return
                    }
                    is Success -> {
                        continue
                    }
                    // async / presenting ui
                    else -> {
                        return
                    }
                }
            }
        }

        fun complete(data: Data) {
            when (data) {
                // finish with error
                is Error -> {
                    xpressPresenter.complete(data)
                }
                // finish with return data
                is Return -> {
                    xpressPresenter.complete(data)
                }
                // continue
                is Success -> {
                    run(context)
                }
                // async / presenting ui
                else -> {
                    if (context.isRoot) return
                    // data can't be Unknownsa
                    val failure = XpressAction.returnError("Error: Unknown data")
                    xpressPresenter.complete(failure)
                }
            }
        }
    }

}