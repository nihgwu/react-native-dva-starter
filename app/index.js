import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'

import dva from './utils/dva'
import Router from './router'

import appModel from './models/app'
import routerModel from './models/router'

const app = dva({
  initialState: {},
  models: [appModel, routerModel],
  extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)
persistStore(app.getStore(), {
  storage: AsyncStorage,
  blacklist: ['router'],
})

AppRegistry.registerComponent('DvaStarter', () => App)
