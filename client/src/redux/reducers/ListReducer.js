import { LIST_DATA_ERROR, LIST_DATA_REQUEST, LIST_DATA_SUCCESS } from "../actionTypes/ListActionType";

const initialState = {
    loading: false,
    data: '',
    error: ''
}

const  reducer = (state = initialState, action)=>{
    switch(action.type){
        case LIST_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        
        case LIST_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case LIST_DATA_ERROR:
            return {
                loading: false,
                data: '',
                error: action.payload,
            }

        default: return state;
    }
}

export default reducer;