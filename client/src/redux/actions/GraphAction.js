import { 
    GRAPH_DATA_REQUEST, 
    GRAPH_DATA_SUCCESS,
    GRAPH_DATA_ERROR, 
    GET_GRAPH_DATA}
     from "../actionTypes/GraphActionTypes";
import { graphService } from "../../services";

const initialState = {
    loading: false,
    data: '',
    error: ''
}

export const graphDataRequest = (payload='')=>{
    return {
        type: GRAPH_DATA_REQUEST,
        payload
    }
}

export const graphDataSuccess = (payload='')=>{
    return {
        type: GRAPH_DATA_SUCCESS,
        payload
    }
}

export const graphDataError = (payload ='')=>{
    return {
        type: GRAPH_DATA_ERROR,
        payload
    }
}
export const getDatagraphData = ()=>{
    return{
        type:GET_GRAPH_DATA
    }
}

//thunk action code
export const getGraphData = ()=>{
    return (dispatch)=>{
        dispatch(graphDataRequest())
        graphService.getGraphData()
        .then(response=>{
            dispatch(graphDataSuccess(response.data));
        })
        .catch(error=>{
            dispatch(graphDataError(error.message))
        })
    }
}