# Памятка



Redux предлагает изменять `state` ненапрямую, а опосредованно через вызов `action`.  

```
store.dispatch(  {type: 'INCREMENT'}  )
```  

Redux работает не с генераторами, а с чистыми функциями. Пишется чистая функция `reducer`, чтобы решить, каким образом каждый `action` преобразует state приложения. Вернуть нужно новый объект.

```
function foo(action, type) {}
```

Нечистые reducer'ы формально будут обработаны, но строго не рекомендуется.  

____
  
## Краткий разбор  


**`reducer'ы`** — это чистые функции, которые принимают previousState и action и возвращают newState. 

```
import {createStore} from 'redux'


export function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
``` 


**`state`**  - примитив, массив, объект или структура данных. Напрямую не изменяется.


**`combineReducers`** - это метод, который позволяет объединить несколько reducer'ов в один.  
Можно контролировать их порядок, отправлять дополнительные данные и переиспользовать их.


```
let store = createStore(counter)
```  
  
**`store`** - это хранилише для state, он ОДИН. Вместо нескольких store используют композицию reducer'ов.  
API: subscribe, dispatch, getState.

- содержит состояние приложения (application state);
- предоставляет доступ к состоянию с помощью getState();
- предоставляет возможность обновления состояния с помощью dispatch(action);
- обрабатывает отмену регистрации слушателей с помощью функции, возвращаемой subscribe(listener).




```
const store = createStore(yourReducer)
```

**`subscribe`** - это метод, который передает в store функцию-подписчик.  

```
const store = createStore(yourReducer)

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(actionCreator1('текст1'))
store.dispatch(actionCreator2(0))
store.dispatch(actionCreator3(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
```

**`dispatch`** - это метод, который позволяет отправить action в store.  

```
store.dispatch()
```

**`getState`** - это метод, который позволяет получить последнее значение из reducer'а.

```
store.getState()
```

____

## Принципы работы  

1. Единственный источник, то есть state всего приложения хранится в дереве объектов внутри одного store.  

2. Единственный способ изменить state - применить action, то есть объект, который описывает, что случится.  

3. Для определения того, как дерево state будет изменено action'ами, используют чистые reducer'ы.


____

## Структура  

### Action

**`Action'ы`** - это простые объекты, которые имеют специальное поле (type, payload, error, meta). Это единственный источник информации для store и единственный способ изменить внутренний state.

Action - описывают то, что произошло.  
Reducer - описывает то, что как именно изменяется state.


```
store.dispatch(  {type: 'INCREMENT'}  )
```  
  
Хранить action'ы лучше в **actionTypes.js.** Импортировать можно так:  

```
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
```


#### Специальные поля:  

- `type`  
Обязательное поле. Значение - обычно строковая константа. Поле указывает на тип исполняемого action.

- `payload`  
Необязательное поле. Значение - все типы данных. Подойдет любая информация, которая не относятся к `type` и не связана со статусом action.  

- `error`  
Необязательное поле. Значения - true, false, null, undefined. Если true, то ошибка, аналогично rejected promise. Если другое значение, то действие не должно интерпретироваться, как ошибка. Является частью payload.

- `meta`  
Необязательное поле. Значение - все типы данных. Для хранения дополнительной информации, не является частью payload.


### Action creators  

 **`Actions creators`** - это функции, которые возвращают action.  
  
```
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```  

#### Отправка action.
```
dispatch(addTodo(text))
```  

####  Автоматическая отправка action.
```
const boundAddTodo = (text) => dispatch(addTodo(text))
boundAddTodo(text)
```  
  

### Доступ к dispatch  

#### Доступ из store.

```
store.dispatch( {type: 'INCREMENT'} )
```

#### Доступ при помощи connect()

```
Библиотека react-redux
```  

#### Доступ при помощи привязки нескольких action creators к dispatch()

```
bindActionCreators()
```

____


## Поток данных, компоненты 

`Поток`: строго однонаправленный поток данных, то есть все данные в приложении следуют одному паттерну жизненного цикла, логика приложения становится предсказуемой.  

`Жизненный цикл Redux - приложения`:

1.  store.dispatch(action),
2.  store вызывает функцию - reducer, которую мы передали,
3.  по необходимости применяется combineReducer( {} ),
4.  store сохраняет дерево state, которое вернул root reducer.  



Выделяют **компоненты - представления** (презентационные) и **компоненты - контейнеры** :

![container-present](https://i.ibb.co/bsJBXdd/container-present.jpg)  

`Компоненты - представления`  
Это обычные React-компоненты: они описывают вид, но не знают, откуда приходят данные и как их изменить. Обычно это **функциональные stateless-компоненты**.
Когда потребуется локальное состояние или lifecycle-методы, то **классовые компоненты**.

`Как правильно создать`

![structure](https://i.ibb.co/cgv6bT9/structure.jpg)


Для того, чтобы соединить такие компоненты с Redux-state, необходимы компоненты-контейнеры.  

`Компоненты - контейнеры`  
Технически это React-компоненты, которые используют store.subscribe() для чтения части состояний Redux-дерева и передают props представлению, которое он render'ит.
Компонент-контейнер рекомендуется генерировать через `connect()`, потому что этот способ оптимизирован и избавляет от ненужных переrender'ов и своей реализации shouldComponentUpdate().  

Если контейнер переполнен, рекомендуется его заздробить на части. Компонент может быть **смешанным**, когда он мал. Например, input с кнопкой "добавить".
  
`mapStateToProps` - функция, которая объясняет, как трансформировать текущее Redux-состояние store в props, которые нужны для передачи в представление.  
  
```
VisibleTodoList требуется вычислить todos для передачи в TodoList, так что нам нужно определить функцию, которая фильтрует state.todos согласно state.visibilityFilter, и использовать ее в mapStateToProps.
```

`mapDispatchToProps` - функция, которая принимает dispatch() и возвращает callback props, который можно вставить в представление.  
  
```
Мы хотим, чтобы контейнер VisibleTodoList вставил prop onTodoClick в представление TodoList и еще мы хотим, чтобы onTodoClick отправлял TOGGLE_TODO экшен
```

`Порядок`:  

1. actionTypes, actionCreators, reducer, rootReducer, store (проверка subscribe + getState),
2. компоненты - представления для UI,
3. компоненты - контейнеры для связи представлений со store.  







