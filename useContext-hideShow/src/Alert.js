import React, {useContext} from 'react';
import {useAlert} from "./AlertProvider";

const Alert = () => {
    const alert = useAlert()
    if (!alert.visible) return null

    return (
        <div>
            <p>Скрытый текст</p>
        </div>
    );
};

export default Alert;