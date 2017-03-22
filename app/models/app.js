import { createAction, NavigationActions } from '../utils'
import * as authService from '../services/auth'

export default {
  namespace: 'app',
  state: {
    fetching: false,
    login: false,
  },
  reducers: {
    loginStart(state, { payload }) {
      return { ...state, ...payload }
    },
    loginEnd(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    * login({ payload }, { call, put }) {
      yield put(
        createAction('loginStart')({
          fetching: true,
        }),
      )
      const login = yield call(authService.login, payload)
      if (login) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          }),
        )
      }
      yield put(
        createAction('loginEnd')({
          login,
          fetching: false,
        }),
      )
    },
  },
}
