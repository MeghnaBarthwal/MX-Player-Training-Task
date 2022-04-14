import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducers'

const data = [];
const middleware = [thunk];
const store = createStore(
    rootReducer, data, composeWithDevTools(applyMiddleware(...middleware))
);

export default store;