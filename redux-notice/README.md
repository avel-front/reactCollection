# Как устроен Redux  



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

**`reducer'ы`** — это чистые функции, которые принимают предыдущий state и action и возвращают новый state.  

**`state`**  - примитив, массив, объект или структура данных. Нельзя изменять объект state напрямую. Если state изменился, нужно возвращать новый объект.  


**`combineReducers`** - это метод, который позволяет объединить несколько reducer'ов в один. Можно контролировать их порядок, отправлять дополнительные данные и переиспользовать их.


```
let store = createStore(counter)
```  
  
**`store`** - это хранилише для state. API: subscribe, dispatch, getState.


```
store.subscribe(() =>
    console.log(store.getState(reducer))
)
```

**`subscribe`** - это метод, который отвечает за обновление UI при изменении состояния.  
Не рекомендуется использовать метод напрямую, лучше React-Redux.  

**`dispatch`** - это метод, который позволяет отправить action в store.  

**`getState`** - это метод, который позволяет получить последнее значение из reducer'а.

```
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
```


Вызов action - единственный способ изменить внутренний state.  

____

## Принципы работы  

1. Единственный источник, то есть state всего приложения хранится в дереве объектов внутри одного store.  

2. Единственный способ изменить state - применить action, то есть объект, который описывает, что случится.  

3. Для определения того, как дерево state будет изменено action'ами, используют чистые reducer'ы.


____

## Структура  

### Action

**`Action'ы`** - это простые объекты, которые имеют специальное поле (type, payload, error, meta). Они являются единственным источником информации для store, поскольку передаются в него через dispatch.  


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

#### **`Actions creators`** - это функции, которые возвращают action.  
  
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



