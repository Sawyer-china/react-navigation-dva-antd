import React, { Component } from 'react'

import dva from './utils/dva'
import Router from './router'

import appModel from './models/app'
import routerModel from './models/router'

const app = dva({
    initialState: {},
    models: [appModel, routerModel],
    onError(e) {
        console.log('onError', e)
    }
})

const App = app.start(<Router />)

export default App
