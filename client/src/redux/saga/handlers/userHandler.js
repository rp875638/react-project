import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_USER, SIGNUP_USER, USER_ERROR, USER_REQUEST, USER_SUCCESS } from '../../actionTypes/UserActionType';
import { userService } from '../../../services';
import { userError, userRequest, userSuccess } from '../../actions/UserAction';
function* handleLogin(action){
    try{
        yield put(userRequest());
        const response = yield call(userService.login,action.payload)
        yield put(userSuccess(response.data.user))
    }
    catch(error){
        yield put(userError(error.message));
    }
}

function* handleSignup(action){
    try{
        yield put(userRequest());
        const response = yield call(userService.signup,action.payload)
        yield put(userSuccess(response.data.user))
    }
    catch(error){
        yield put(userError(error.message));
    }
}


function* watcherUserSaga(){
    yield takeEvery(LOGIN_USER, handleLogin);
    yield takeEvery(SIGNUP_USER, handleSignup);
}

export default watcherUserSaga;