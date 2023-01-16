import axios from 'axios';
import {UserAuth} from '../Constant/constantType'

export const RegistrationAction = (user) => async (dispatch) => {
    const {name, email, password} = user;
    try {
        dispatch({type:UserAuth.USER_REGISTRATION_REQUEST})

        const config = {
            headers : {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:5000/api/auth/signup', {name,email,password}, config)
        
        dispatch({type:UserAuth.USER_REGISTRATION_SUCCESS,payload:data})
       
        localStorage.setItem('authData', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type:UserAuth.USER_REGISTRATION_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const LoginAction = (user) => async (dispatch) => {
    const {email, password} = user;
    try {
        dispatch({type:UserAuth.USER_LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:5000/api/auth/login', {email,password}, config);        
        
        dispatch({type:UserAuth.USER_LOGIN_SUCCESS, payload:data});

        localStorage.setItem('authData', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type:UserAuth.USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const Logout = () => (dispatch) => {
    dispatch({type:UserAuth.USER_LOGOUT})

    localStorage.removeItem('authData')
}