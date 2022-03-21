import React, {useCallback, useEffect, useState} from "react";
import ItemList from "./ItemList";


const Example = () => {
    const [count, setCount] = useState(1)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? 'red' : 'black'
    }

    const generateItems = useCallback(() => {

        return new Array(count).fill(null)
            .map((elem, i) => `Элемент ${i + 1}`)
    }, [count])

    return (
        <>
         <h3 style={styles}>Вычисляемое значение: {count}</h3>

            <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить</button>
            <ItemList getItems={generateItems}  />
        </>
    )
}

export default Example