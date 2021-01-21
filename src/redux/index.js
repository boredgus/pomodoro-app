import {combineReducers, createStore} from "redux";

import colorTheme from "./colorTheme";
import timer from "./timer";

const rootReducer= combineReducers({
    timer,
    colorTheme
})

const store = createStore(rootReducer);
store.subscribe(() => { })

export default store;