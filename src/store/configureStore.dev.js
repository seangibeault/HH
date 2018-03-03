import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";


export default function configureStore(initialState) {
    let store = createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;

}