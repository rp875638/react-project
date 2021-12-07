import axios from "axios";
import { 
    LIST_DATA_REQUEST, 
    LIST_DATA_SUCCESS,
    LIST_DATA_ERROR, 
    GET_LIST_DATA}
     from "../actionTypes/ListActionType";
import { listService } from "../../services";

export const listDataRequest = (payload='')=>{
    return {
        type: LIST_DATA_REQUEST,
        payload
    }
}

export const listDataSuccess = (payload='')=>{
    return {
        type: LIST_DATA_SUCCESS,
        payload
    }
}

export const listDataError = (payload ='')=>{
    return {
        type: LIST_DATA_ERROR,
        payload
    }
}

export const getListData = ()=>{
    return{
        type:GET_LIST_DATA
    }
}

// export const getListData = ()=>{
//     return (dispatch)=>{
//         dispatch(listDataRequest())
//         listService.getListData()
//         .then(response=>{
//             dispatch(listDataSuccess(response.data));
//         })
//         .catch(error=>{
//             dispatch(listDataError(error.message))
//         })
//     }
// }