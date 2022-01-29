import React, {useEffect, useRef, useState} from 'react';

const App = () => {
    const [value, setValue] = useState('')
    const prevValue = useRef()

    useEffect(() => {
        prevValue.current = value
    }, [value])

    return (

        <div className="container-md">
            <h1 className="display-5">Предыдущее значение: {prevValue.current}</h1>
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="form-control"
            />
        </div>
    );
};

export default App;