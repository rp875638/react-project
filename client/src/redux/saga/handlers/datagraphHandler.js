import { call, put, takeEvery } from 'redux-saga/effects';
import { graphService } from '../../../services';
import { graphDataError, graphDataRequest, graphDataSuccess } from '../../actions/GraphAction';
import { GET_GRAPH_DATA } from '../../actionTypes/GraphActionTypes';


function* getDatagraph(action){
   try{ 
       yield put(graphDataRequest());
        const response = yield call(graphService.getGraphData)
        yield put(graphDataSuccess(response.data))
    }
    catch(error){
        yield put(graphDataError(error.message))
    }
}

function* watcherDatagraphSaga(){
    yield takeEvery(GET_GRAPH_DATA, getDatagraph);
}

export default watcherDatagraphSaga;