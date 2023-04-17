import { Action } from "@remix-run/router"

const initialState = {
    message: false,
    isLogin: false,
    loading: true,
}

const loginReducer = (state = initialState, Action) => {
    switch (Action.type) {
        case 'LOGIN':
            return {
                ...initialState,
                message: Action.payload
            };
            case 'LOGOUT':
                return {
                    ...initialState,
                    message: Action.payload
                };
            case 'CHECK_TOKEN':
                return {
                    ...initialState,
                    isLogin: Action.payload.isLogin,
                    loading: Action.payload.loading
                };
            default:
                return state;
    }
}

export default loginReducer