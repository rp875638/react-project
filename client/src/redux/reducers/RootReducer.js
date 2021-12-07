import { combineReducers } from "redux";
import userReducer from './UserReducer';
import graphReducer from './GraphReducer';
import listReducer from './ListReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    graph: graphReducer,
    list: listReducer
});