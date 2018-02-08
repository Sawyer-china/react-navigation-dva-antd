import React, { Component } from 'react'
import { create } from 'dva-core'

import { Provider, connect } from 'react-redux'

export { connect }

export default function(options) {
    const app = create(options)
    if (!global.registered) options.models.forEach(model => app.model(model)) // 如果注册过 model 则不需再次注册
    global.registered = true // 注：golbal 为react native 全局变量   类似 window

    app.start()

    const store = app._store

    app.start = container => () =>
        <Provider store={store}>
            {container}
        </Provider> // 将路由通过该函数返回
    app.getStore = () => store // 将 store 通过该方法返回

    return app
}
