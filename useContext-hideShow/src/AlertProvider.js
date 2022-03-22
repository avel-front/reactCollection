import React, {useContext, useState} from 'react';

const AlertContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false)
    const toggleAlert = () => setAlert(prev => !prev)

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggleAlert
        }}>
                {children}
        </AlertContext.Provider>
    );
};

export default AlertProvider;