import React, {useEffect, useState} from 'react';

const App = () => {
    const [type, setType] = useState('users')

    useEffect(() => {
        console.log('Type changed:', type)
    }, [type])

    return (
        <div>
            <h1>Ресурсы</h1>
            <button onClick={() => setType('users')} className="btn btn-success">Пользователи</button>
            <button onClick={() => setType('posts')} className="btn btn-danger">Пользователи</button>
            <button onClick={() => setType('comments')} className="btn btn-primary">Пользователи</button>
        </div>
    );
};

export default App;


