import { configureStore } from "@reduxjs/toolkit";
import { combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { composeWithDevTools } from '@redux-devtools/extension';
import menuReducer from "./menu/menuReducer";
import { chatbotReducer } from "./ChatbotClose/chatbotReducer";
import chatReducer from "./ChatBot/chatbotReducer";
import drawerReducer from "./Drawer/drawerReducer";
import udcReducer from './udc/udcReducer';
import serviceReducer from './services/serviceReducer';


//COMBINING ALL REDUCERS
const reducers = combineReducers({
    menu: menuReducer,
    chatbot: chatbotReducer,
    drawer: drawerReducer,
    udc: udcReducer,
    services: serviceReducer,
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
    key: "vptuem",
    whitelist: ["udc","services","menu","user"], // only counter will be persisted, add other reducers if needed
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