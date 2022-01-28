import React, {useEffect, useState} from 'react';

const App = () => {
    const [pos,setPos] = useState({
        x: 0, y: 0
    })

    function moveHandler(e) {
        setPos({
            x: e.clientX,
            y: e.clientY
        }, [])
    }

    useEffect(() => {
        window.addEventListener('mousemove', moveHandler)
        return () => {
            window.removeEventListener('mousemove', moveHandler)
        }
    })

    return (
        <div>
         <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
};

export default App;