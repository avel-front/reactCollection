import {createStore} from "redux";
import todoApp from "./reducers";
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from "./actions";

// store

const store = createStore(todoApp)

// last value from reducer: empty

console.log(store.getState())


// function-subscriber

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('текст1'))
store.dispatch(addTodo('текст2'))
store.dispatch(addTodo('текст3'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(3))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()

// end function-subscriber






















































// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import {createStore} from "redux";
// import todoApp from "./reducers";
// import {addToDo, setVisibilityFilter, toggleTodo, VisibilityFilters} from "./actions";
//
//
//
// const store = createStore(todoApp)
//
// // вывести начальное состояние
// console.log(store.getState())
//
// // каждое обновление выводим state, задали рамки
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
//
// // отправим несколько action'ов
// store.dispatch(addToDo('Learn about actions'))
// store.dispatch(addToDo('Learn about reducers'))
// store.dispatch(addToDo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
// // конец рамки
// unsubscribe()





