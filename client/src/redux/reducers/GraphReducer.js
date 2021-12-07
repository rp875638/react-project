import { GRAPH_DATA_ERROR, GRAPH_DATA_REQUEST, GRAPH_DATA_SUCCESS } from "../actionTypes/GraphActionTypes";

const initialState = {
    loading: false,
    data: '',
    error: ''
}

const  reducer = (state = initialState, action)=>{
    switch(action.type){
        case GRAPH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        
        case GRAPH_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case GRAPH_DATA_ERROR:
            return {
                loading: false,
                data: '',
                error: action.payload,
            }

        default: return state;
    }
}

export default reducer;