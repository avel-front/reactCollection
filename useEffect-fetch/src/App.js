import React, {useEffect, useState} from 'react';

const App = () => {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    return (
        <div>
            <h1>Ресурсы</h1>
            <h5>Вы на вкладке "{type}"</h5>
            <button onClick={() => setType('users')} className="btn btn-success m-1">Пользователи</button>
            <button onClick={() => setType('todos')} className="btn btn-danger">Действия</button>
            <button onClick={() => setType('comments')} className="btn btn-primary m-1">Комментарии</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default App;