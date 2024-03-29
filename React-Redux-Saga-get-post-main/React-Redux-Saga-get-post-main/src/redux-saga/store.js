import { applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Combination of all Reducer
import rootReducer from "./rootReducer";
// Import All Saga code
import { rootSaga } from "./saga/user";
import { createStoreHook } from "react-redux";

const SagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(rootSaga);

export default store;