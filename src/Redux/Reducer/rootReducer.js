import {combineReducers} from 'redux'
import { UserAuth } from '../Constant/constantType'
import {LoginReducer, RegistrationReducer} from '../Reducer/authReducer'
import { CardAddReducer, CardDeleteReducer, CardListReducer, CardUpdateReducer } from './cardReducer'
import { TitleAddReducer, TitleDeleteReducer, TitleListReducer } from './titleReducer'

const appReducer = combineReducers({
    Registration : RegistrationReducer,
    Login : LoginReducer,
    TitleList : TitleListReducer,
    TitleAdd : TitleAddReducer,
    TitleDelete : TitleDeleteReducer,
    CardAdd : CardAddReducer,
    CardUpdate : CardUpdateReducer,
    CardList : CardListReducer,
    CardDelete : CardDeleteReducer,
})

const rootReducer = (state, action) => {
    if(action.type === UserAuth.USER_LOGOUT){
        return appReducer(undefined,action);
    }
    return appReducer(state, action);
}

export default rootReducer;