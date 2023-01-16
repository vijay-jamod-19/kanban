import {CardConstant} from '../Constant/constantType'

const initialState = {
    loading:false,
    cards:[],
    error:''
}
export const CardAddReducer = (state = initialState, action) => {
    switch(action.type){
        case CardConstant.CARD_ADD_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case CardConstant.CARD_ADD_SUCCESS:
            return {
                ...state,
                loading:false,
                cards:action.payload
            }
        case CardConstant.CARD_ADD_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export const CardUpdateReducer = (state = initialState, action) => {
    switch(action.type){
        case CardConstant.CARD_UPDATE_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case CardConstant.CARD_UPDATE_SUCCESS:
            return {
                ...state,
                loading:false,
                cards:action.payload
            }
        case CardConstant.CARD_UPDATE_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export const CardListReducer = (state = initialState, action) => {
    switch(action.type){
        case CardConstant.CARD_LIST_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case CardConstant.CARD_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                cards:action.payload,
            }
        case CardConstant.CARD_LIST_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}

export const CardDeleteReducer = (state = initialState, action) => {
    switch(action.type){
        case CardConstant.CARD_DELETE_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case CardConstant.CARD_DELETE_SUCCESS:
            return {
                ...state,
                loading:false,
                cards:action.payload
            }
        case CardConstant.CARD_DELETE_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload,
            }
        default:
            return state;
    }
}