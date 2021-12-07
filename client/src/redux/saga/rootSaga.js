import { all } from 'redux-saga/effects';
import watcherDatagraphSaga from './handlers/datagraphHandler';
import watcherListSaga from './handlers/listHandler';
import watcherUserSaga from './handlers/userHandler';

export default function* (){
    return yield all([watcherUserSaga(),watcherListSaga(),watcherDatagraphSaga()]);
}