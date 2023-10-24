package com.xpress

interface XpressPresenter {
    fun complete(data: XpressAction.Data) = Unit
    fun present(data: XpressAction.Data) = Unit
}