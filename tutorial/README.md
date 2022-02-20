# Как устроен Redux


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
Это reducer, то есть чистая функция в формате (state, action) => state. Он описывает, как action преобразовывает состояние в следующее состояние.  

Это может быть примитив, массив, объект или структура данных. Нельзя изменять объект состояния напрямую. Если состояние изменилось, нужно возвращать новый объект.


```
let store = createStore(counter)
```  
  
    
 Это store, который хранит состояние приложения.
 API: subscribe, dispatch, getState.


```
store.subscribe(() =>
    console.log(store.getState())
)
```

 Метод, который отвечает за обновление UI при изменении состояния.  
 Не рекомендуется использовать метод напрямую, лучше React-Redux.

```
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
```


Вызов action - единственный способ изменить внутренний state.  
   
Action будет сериализован, залогирован/сохранен и воспроизведен.  
Сериализация - это процесс трансформации структуры данных в байты.
