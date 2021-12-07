import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from '../actionTypes/UserActionType';

const initialState = {
    loading: false,
    data: '',
    error:''
}
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case USER_SUCCESS:
            console.log(action.payload);
           localStorage.setItem('token',action.payload.token);
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case USER_ERROR:
            return{
                loading: false,
                data:'',
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;