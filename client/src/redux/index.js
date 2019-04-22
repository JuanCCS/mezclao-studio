import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import portfolioReducer from './portfolio'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  portfolio: portfolioReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)
const exportObj = { store, persistor }

export default exportObj;