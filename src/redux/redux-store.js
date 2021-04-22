import {createStore, combineReducers, applyMiddleware} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sideBarReducer from "./sideBarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;