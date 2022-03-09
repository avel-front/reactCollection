import rootReducer from "./reducers/rootReducer";
import {createStore} from "redux";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./components/App";


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)