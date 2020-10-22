import { createStore, combineReducers } from 'redux'
import { carroReducer } from './reducers/projectReducer'

const rootReducer = combineReducers({
    carrito: carroReducer
})

const configureStore = () => {
    createStore(rootReducer)
}

export default configureStore