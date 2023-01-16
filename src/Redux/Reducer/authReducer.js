import {UserAuth} from '../Constant/constantType'

const initialState = {
    loading:false,
    user:[],
    isAuthenticat:false,
    error:''
}
export const RegistrationReducer = (state=initialState, action) => {
    switch(action.type){
        case UserAuth.USER_REGISTRATION_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case UserAuth.USER_REGISTRATION_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticat:true,
                user:action.payload,
            }
        case UserAuth.USER_REGISTRATION_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type){
        case UserAuth.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case UserAuth.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticat:true,
                user:action.payload,
                error:'',
            }
        case UserAuth.USER_LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}