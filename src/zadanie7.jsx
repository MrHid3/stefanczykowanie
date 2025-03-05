import Item from "./Item2"
import React from "react";

const App = () => {
    const addEnd = () => {
        setList([...list, Math.floor(Math.random()*list.length)]);
        console.log(list);
    };
    const addBegin = () => {
        setList([Math.floor(Math.random()*list.length), ...list])
        console.log(list);

    };
    const deleteAll = () => {
        setList([]);
        console.log(list);
    };
    const deleteChosen = (index) => {
        setList([...list.filter((item, i) => i !== index)]);
        console.log(list);
    };
    const [list, setList] = React.useState([]);
    return(
        <>
            <button onClick={addEnd}>dodaj na koniec</button>
            <button onClick={addBegin}>na początek</button>
            <button onClick={deleteAll}>usuń wszystkie</button>
            <div className="flex">
            {list.map((item, i) => (
                <Item data={item} function={() => {deleteChosen(i)}}/>
                )
            )}
            </div>
        </>
    )
}

export default App