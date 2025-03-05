import PopUp from "./Item3.jsx";
import {useState} from "react";

const Item = (props) => {
    const popUp = () => {
        if(pop) return (
            <PopUp deleteSelf={() => {setPop(false)}} deleteItem={props.function}></PopUp>
        );
    }
    const [pop, setPop] = useState(false);
    return (
        <div className={"nice"}>
            {props.data}
            <button onClick={()=>setPop(!pop)}>usun mnie</button>
            {popUp()}
        </div>
    )
}

export default Item