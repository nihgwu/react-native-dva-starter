import { delay, NavigationActions } from '../utils'
import { routerReducer } from '../router'

const actions = [
  NavigationActions.BACK,
  NavigationActions.INIT,
  NavigationActions.NAVIGATE,
  NavigationActions.POP,
  NavigationActions.POP_TO_TOP,
  NavigationActions.PUSH,
  NavigationActions.RESET,
  NavigationActions.REPLACE,
  NavigationActions.SET_PARAMS,
  NavigationActions.URI,
  NavigationActions.COMPLETE_TRANSITION,
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
        while (true) {
          const payload = yield take(actions)
          yield put({
            type: 'apply',
            payload,
          })
          /* 这种解决debounce的方式会导致其他正常的nav action无法生效
          // debounce, see https://github.com/react-community/react-navigation/issues/271
          if (payload.type === 'Navigation/NAVIGATE') {
            yield call(delay, 500)
          }
          */
        }
      },
      { type: 'watcher' },
    ],
  },
}
