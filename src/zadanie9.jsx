import Item from './Item4.jsx'
import {useEffect, useState} from "react";

const App = () => {
    const [json, setJson] = useState([])
    useEffect(() => {
        async function fetchJson() {
            let data = await fetch('http://localhost:3000/data');
            data = await data.json();
            setJson(await data)
        }
        fetchJson();
    })
    return (
        <div className={"flex"}>
            {json.map((avatar) => (
                <Item item={avatar}></Item>
            ))}
        </div>
    )
}

export default App;