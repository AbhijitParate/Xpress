package com.xpress

import com.xpress.XpressAction.Data

interface XpressPresenter {
    fun complete(data: Data) = Unit
    fun present(data: Data) = Unit
}