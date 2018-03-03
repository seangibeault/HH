import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';

const initialState = {};


export default createStore(
    reducers,
    applyMiddleware(
        ReduxThunk
    )
)
