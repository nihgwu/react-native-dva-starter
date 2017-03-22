import React from 'react'
import { AppRegistry } from 'react-native'
import dva from 'dva/mobile'

import { registerModels } from './models'
import Router from './router'

const app = dva({
  initialState: {},
  onError(e) {
    console.log('onError', e)
  },
})
registerModels(app)
app.router(() => <Router />)
const App = app.start()

AppRegistry.registerComponent('DvaStarter', () => App)
