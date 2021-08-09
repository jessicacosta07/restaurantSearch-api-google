import { createStore } from "/redux";
import rootReducer from './reduders';

const store = createStore(rootReducer);

export default store;