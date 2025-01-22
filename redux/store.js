import { configureStore } from "@reduxjs/toolkit";
import { combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { composeWithDevTools } from '@redux-devtools/extension';
import menuReducer from "./menu/menuReducer";


//COMBINING ALL REDUCERS
const reducers = combineReducers({
    menu: menuReducer
    
});
// BINDING MIDDLEWARE
/*const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        //const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};*/
const config ={
    key: "root",
    whitelist: ["menu"], // only counter will be persisted, add other reducers if needed
    storage,
}

const reducer= persistReducer(config,reducers);

const store = configureStore({
    reducer:reducer,
    devTools:process.env.NODE_ENV !=="production",
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;