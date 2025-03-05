const PopUp = (props) => {

    return (
        <div className="center">
            <button onClick={props.deleteSelf}>Anuluj</button>
            <button onClick={() => {props.deleteItem(); props.deleteSelf()}}>Usuń</button>
        </div>
    )
}

export default PopUp;