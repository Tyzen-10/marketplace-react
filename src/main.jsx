import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import myFirstReducer from './reducer.js'
import { Provider } from 'react-redux'
import { combineReducers,applyMiddleware,legacy_createStore,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga.js'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({myFirstReducer})
// Compose Redux DevTools with applyMiddleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))
//No suggestions because intial state not passed in.
sagaMiddleware.run(mySaga)
ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <App />
    </Provider>,
)
