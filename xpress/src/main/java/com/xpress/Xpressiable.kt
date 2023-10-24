package com.xpress

abstract class Xpressiable(context: XpressContext) {

    val context: XpressContext = context

    var data: Any? = null

    fun xpress(presenter: (Any?) -> Unit) {
        onStart()
        onPresent(presenter)
        onStop()
    }

    open fun onStart() {
        TODO("Not yet implemented")
    }

    open fun onPresent(presenter: (Any?) -> Unit) {
        if (shouldPresent()) presenter.invoke(data)
    }

    open fun shouldPresent(): Boolean = true

    open fun onStop() {
        TODO("Not yet implemented")
    }
}