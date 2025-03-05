import { useState } from 'react';
import Item from "./Item"

const Zadanie6 = () => {
    const INIT_OBJ = {
        value: 1000,
        array: [1, 2, 3],
        object: { a:1, b:2 }
    };

    const [state, updateState] = useState(INIT_OBJ);

    const update = (val) => {
        switch(val){
            case 0:
                updateState({...state, value: state.value += 1});
                break;
            case 1:
                updateState({...state, array: [...state.array, state.array[state.array.length - 2]]})
                break;
            case 2:
                updateState({...state, object: { a: state.object.b, b: Math.floor(Math.random() * 10) }});
                break;
        }
    }
    return (
        <>
            <button onClick={() => update(0)}>change value</button>
            <button onClick={() => update(1)}>change array</button>
            <button onClick={() => update(2)}>change object</button>
            <Item data={state.value}></Item>
            <Item data={state.array}></Item>
            <Item data={state.object}></Item>
        </>
    )
}


export default Zadanie6
