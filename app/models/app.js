import { NavigationActions } from 'react-navigation'
import * as authService from '../services/auth'

export default {
  namespace: 'app',
  state: {
    login: false,
    fetching: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      yield put({ type: 'loginStart', payload })
      const login = yield call(authService.login, payload)
      if (login) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        )
      }
      yield put({ type: 'loginEnd', login })
    },
    *logout({ cb }, { put }) {
      yield put({ type: 'logoutStart' })
      if (cb) cb()
    },
  },

  reducers: {
    loginStart(state, { payload }) {
      return { ...state, ...payload, fetching: true }
    },
    loginEnd(state, { login }) {
      return { ...state, login, fetching: false }
    },
    logoutStart(state, { payload }) {
      return { ...state, ...payload, login: false }
    },
  },
}
