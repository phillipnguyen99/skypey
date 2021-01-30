import { contacts } from '../fake-data'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer  from '../reducers'


const middleware = [thunk];

const store = createStore(
  reducer,
  {contacts},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;