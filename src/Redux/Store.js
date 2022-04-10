import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './appReducer' 
import { persistStore} from 'redux-persist'

const composEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(appReducer, composEnhancer(applyMiddleware())) 

const persistor = persistStore(store);

export { store, persistor };