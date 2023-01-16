import axios from 'axios';
import {TitleConstant} from '../Constant/constantType'

export const TitleListAction = () => async (dispatch) => {
    try {
        dispatch({type:TitleConstant.TITLE_LIST_REQUEST})

        const authData = JSON.parse(localStorage.getItem('authData'));
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${authData.token}`
            }
        }      
        const {data} = await axios.get('http://localhost:5000/api/board/list',config);

        dispatch({type:TitleConstant.TITLE_LIST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:TitleConstant.TITLE_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const BoardAddAction = (value) => async (dispatch) => {
    const {user,title} = value;
    try {
        dispatch({type:TitleConstant.BOARD_ADD_REQUEST})

        const authData = JSON.parse(localStorage.getItem('authData'));
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${authData.token}`
            }
        }      
        const {data} = await axios.post('http://localhost:5000/api/board/add',{user,title},config);

        dispatch({type:TitleConstant.BOARD_ADD_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:TitleConstant.BOARD_ADD_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const TitleDeleteAction = (id) => async (dispatch) => {
    try {
        dispatch({type:TitleConstant.BOARD_DELETE_REQUEST})

        const authData = JSON.parse(localStorage.getItem('authData'));
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${authData.token}`
            }
        }      
        const {data} = await axios.delete(`http://localhost:5000/api/board/delete/${id}`,config);
                
        dispatch({type:TitleConstant.BOARD_DELETE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({
            type:TitleConstant.BOARD_DELETE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}