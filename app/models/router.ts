import { delay, NavigationActions } from '../utils'
import { routerReducer } from '../router'

const actions = Object.values(NavigationActions).filter(
  x => typeof x === 'string' && x.startsWith('Navigation/')
)

const isPushAction = action =>
  action.type === NavigationActions.NAVIGATE ||
  action.type === NavigationActions.PUSH

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
    handlePush: [
      function* handlePush({ take, call, put }) {
        while (true) {
          const { payload } = yield take('handlePush')
          yield put({
            type: 'apply',
            payload,
          })
          // debounce, see https://github.com/react-community/react-navigation/issues/271
          yield call(delay, 500)
        }
      },
      { type: 'watcher' },
    ],
    watch: [
      function* watch({ take, put }) {
        while (true) {
          const action = yield take(actions)
          yield put({
            type: isPushAction(action) ? 'handlePush' : 'apply',
            payload: action,
          })
        }
      },
      { type: 'watcher' },
    ],
  },
}
