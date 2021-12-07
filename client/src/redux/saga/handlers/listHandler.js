import { call, put, takeEvery } from 'redux-saga/effects';
import { listService } from '../../../services';
import { listDataError, listDataRequest, listDataSuccess } from '../../actions/ListAction';
import { GET_LIST_DATA } from '../../actionTypes/ListActionType';


function* getList(action){
   try{ 
       yield put(listDataRequest());
        const response = yield call(listService.getListData)
        yield put(listDataSuccess(response.data))
    }
    catch(error){
        yield put(listDataError(error.message))
    }
}

function* watcherListSaga(){
    yield takeEvery(GET_LIST_DATA, getList);
}

export default watcherListSaga;