import React, {useEffect, useState} from 'react';
import {clear} from "@testing-library/user-event/dist/clear";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const clear = () => {
        setValue('')
    }

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

const useLogger = (value) => {
    useEffect(() => {
        console.log(value)
    }, [value])
}

const Example = () => {
    const name = useInput('')
    useLogger(name.value)

    return (
        <>
            <input type="text" {...name.bind}/>
            <button onClick={() => name.clear()}>Clear</button>
            <hr/>
            <h3>{name.value}</h3>
        </>
    );
};

export default Example;