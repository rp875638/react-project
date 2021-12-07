import { USER_REQUEST, USER_SUCCESS, USER_ERROR, LOGIN_USER, SIGNUP_USER } from '../actionTypes/UserActionType';
import { userService } from '../../services';


export const userRequest = (payload={})=>{
    return{
        type:USER_REQUEST,
        payload,
    }
}


export const userSuccess = (payload={})=>{
    return{
        type:USER_SUCCESS,
        payload,
    }
}

export const userError = (payload={})=>{
    return{
        type:USER_ERROR,
        payload,
    }
}

export const loginUser = (payload={})=>{
    return{
        type:LOGIN_USER,
        payload
    }
}

export const signupUser = (payload={})=>{
    return{
        type:SIGNUP_USER,
        payload
    }
}

 
//Thunk middlerware actions
export const login = data=> dispatch=>{
    dispatch(userRequest());
    userService.login(data)
    .then(response=>{
        dispatch(userSuccess({...response.data, isAuthenticated:true}));
    })
    .catch(error=>{
        console.log(error.message)
        dispatch(userError(error.message));
    })
}

export const signup =data=> dispatch=>{
    dispatch(userRequest());
    userService.signup(data)
    .then(response=>{
        dispatch(userSuccess({...response.data, isAuthenticated:true}));
    })
    .catch(error=>{
        dispatch(userError(error.message));
    })
}