import React from 'react';
import {useAlert} from "./AlertProvider";


const Main = () => {
    const {toggleAlert} = useAlert()

    return (
        <>
            <button onClick={toggleAlert}>Click</button>
        </>
    );
};

export default Main;