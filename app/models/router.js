import { delay, NavigationActions } from '../utils'
import { routerReducer } from '../router'

const actions = [
  NavigationActions.BACK,
  NavigationActions.INIT,
  NavigationActions.NAVIGATE,
  NavigationActions.RESET,
  NavigationActions.SET_PARAMS,
  NavigationActions.URI,
]

export default {
  namespace: 'router',
  state: {
    ...routerReducer(),
  },
  reducers: {
    apply(state, { payload: action }) {
      return routerReducer(state, action)
    },
  },
  effects: {
    watch: [
      function* watch({ take, call, put }) {
        const loop = true
        while (loop) {
          const payload = yield take(actions)
          yield put({
            type: 'apply',
            payload,
          })
          // debounce, see https://github.com/react-community/react-navigation/issues/271
          if (payload.type === 'Navigation/NAVIGATE') {
            yield call(delay, 500)
          }
        }
      },
      { type: 'watcher' },
    ],
  },
}
