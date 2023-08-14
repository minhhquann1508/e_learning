import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ManageCourseReducer } from './reducers/ManageCourseReducer/ManageCourseReducer'
import { ManageUserReducer } from './reducers/ManageUserReducer/ManageUserReducer'
import { LoadingReducer } from './reducers/Loading/LoadingReducer'
import { AdminTabReducer } from './reducers/Admin/AdminTabsReducer'
const rootReducer = combineReducers({
    ManageCourseReducer,
    ManageUserReducer,
    LoadingReducer,
    AdminTabReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))