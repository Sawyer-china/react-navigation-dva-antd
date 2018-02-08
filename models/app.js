import { NavigationActions } from 'react-navigation'
import * as authService from '../services/auth'
export default {
    namespace: 'app',
    state: {
        isLogin: false
    },
    reducers: {
        updateState(state, { payload }) {
            return { ...state, ...payload }
        }
    },
    effects: {
        *login({ payload }, { call, put }) {
            const login = yield call(authService.login, payload)
            if(login){
                
            }
        }
    }
}
