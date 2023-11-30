import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import {createStore} from "redux";

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        case "res":
            return 0;
        default:
            return state;
    }
}

const store = createStore(reducer)
store.subscribe(()=> {
    document.getElementById("count").textContent = store.getState()
})
document.getElementById("inc").addEventListener("click", () => {
    store.dispatch({type: "inc"})
})
document.getElementById("res").addEventListener("click", () => {
    store.dispatch({type: "res"})
})
document.getElementById("dec").addEventListener("click", () => {
    store.dispatch({type: "dec"})
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <></>
    </React.StrictMode>
);
