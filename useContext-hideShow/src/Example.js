import React, {useState} from 'react';
import Main from "./Main";
import Alert from "./Alert";
import AlertProvider from "./AlertProvider";



const Example = () => {
    return (
        <AlertProvider>
            <Main/>
            <Alert/>
        </AlertProvider>
    );
};

export default Example;