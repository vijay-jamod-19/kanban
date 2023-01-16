import {CardConstant} from '../Constant/constantType'
import axios from 'axios'

export const CardAddAction = (value) => async (dispatch) => {
    const {user,board,title} = value;
    try {
        dispatch({type:CardConstant.CARD_ADD_REQUEST})

        const authData = JSON.parse(localStorage.getItem('authData'));
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${authData.token}`
            }
        }      
        const {data} = await axios.post('http://localhost:5000/api/card/add',{user,board,title},config);

        dispatch({type:CardConstant.CARD_ADD_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:CardConstant.CARD_ADD_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const CardUpdateAction = (value) => async (dispatch) => {
    const {board,id,title,description,status} = value;
    try {
        dispatch({type:CardConstant.CARD_UPDATE_REQUEST})

        const authData = JSON.parse(localStorage.getItem('authData'));
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${authData.token}`
            }
        }      
        const {data} = await axios.put(`http://localhost:5000/api/card/edit/${id}`,{board,title,description,status},config);

        dispatch({type:CardConstant.CARD_UPDATE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:CardConstant.CARD_UPDATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const CardListAction = () => async (dispatch) => {
    try {
        dispatch({type:CardConstant.CARD_LIST_REQUEST})

        const authData = JSON.parse(localStorage.getItem('authData'));
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${authData.token}`
            }
        }      
        const {data} = await axios.get('http://localhost:5000/api/card/list',config);
        
        dispatch({type:CardConstant.CARD_LIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:CardConstant.CARD_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const CardDeleteAction = (id) => async (dispatch) => {
    try {
        dispatch({type:CardConstant.CARD_DELETE_REQUEST})

        const authData = JSON.parse(localStorage.getItem('authData'));
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${authData.token}`
            }
        }      
        const {data} = await axios.delete(`http://localhost:5000/api/card/delete/${id}`,config);
                
        dispatch({type:CardConstant.CARD_DELETE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:CardConstant.CARD_DELETE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}