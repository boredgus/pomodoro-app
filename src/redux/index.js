import {combineReducers, createStore} from "redux";

import colorTheme from "./colorTheme";
import timer, { setSession } from "./timer";

const rootReducer= combineReducers({
    timer,
    colorTheme
})

const store = createStore(rootReducer);
store.subscribe(() => {
    // console.log(store.getState());
})

store.dispatch(setSession(30));
export default store;