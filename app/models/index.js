import appModel from './app'
import router from './router'

export function registerModels(app) {
  app.model(appModel)
  app.model(router)
}
