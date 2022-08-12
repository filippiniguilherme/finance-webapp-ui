import { createStore, combineReducers } from 'redux'

import counterReducer from './reducers/counterReducer'

const reducers = combineReducers({
    counter: counterReducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig