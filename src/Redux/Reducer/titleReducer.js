import {TitleConstant} from '../Constant/constantType'

const initialState = {
    loading:false,
    titles:[],
    error:''
}

export const TitleListReducer = (state = initialState, action) => {
    switch(action.type){
        case TitleConstant.TITLE_LIST_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case TitleConstant.TITLE_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                titles:action.payload,
            }
        case TitleConstant.TITLE_LIST_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export const TitleAddReducer = (state = initialState, action) => {
    switch(action.type){
        case TitleConstant.BOARD_ADD_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case TitleConstant.BOARD_ADD_SUCCESS:
            return {
                ...state,
                loading:false,
                titles:action.payload,
            }
        case TitleConstant.BOARD_ADD_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export const TitleDeleteReducer = (state = initialState, action) => {
    switch(action.type){
        case TitleConstant.BOARD_DELETE_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case TitleConstant.BOARD_DELETE_SUCCESS:
            return {
                ...state,
                loading:false,
                titles:action.payload,
            }
        case TitleConstant.BOARD_DELETE_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}