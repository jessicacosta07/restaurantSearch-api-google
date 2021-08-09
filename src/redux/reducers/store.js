import { createStore } from "node_modules/redux/index";
import rootReducer from './reduders';

const store = createStore(rootReducer);

export default store;