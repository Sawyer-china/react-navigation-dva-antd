import { NavigationActions } from '../utils'
import * as authService from '../services/auth'

export default {
    namespace: 'app',
    state: {
        isLogin: false,
        fetching: false // 加载进度条
    },
    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload }
        }
    },
    effects: {
        /**
         * 用户登录
         * 
         */
        *login({ payload }, { call, put }) {
            yield put({ type: 'updateState', payload: { fetching: true } })
            const login = yield call(authService.login, payload)
            if (login) {
                yield put({
                    type: 'updateState',
                    payload: { isLogin: true, fetching: false }
                })
                yield put(NavigationActions.back())
            }
        },
        /**
         * 退出登录
         * 
         * @param {*} param0 
         * @param {*} param1 
         */
        *logout({ payload }, { call, put }) {
            yield put({ type: 'updateState', payload: { isLogin: false } })
        }
    }
}
