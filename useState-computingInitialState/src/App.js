import React, {useState} from 'react';

const App = () => {
    const [counter, setCounter] = useState(() => {
        return computeInitialState()
    })

    function increment() {
        setCounter(prev => prev + 1)
    }
    function decrement() {
        setCounter(prev => prev - 1)
    }

    function computeInitialState() {
        console.log('Computing...')
        return Math.trunc(Math.random() * 20)
    }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success m-1">Добавить</button>
            <button onClick={decrement} className="btn btn-danger">Убрать</button>
        </div>
    );
};

export default App;