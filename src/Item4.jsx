const Item = (props) =>{

    return(
        <div className={"nice"}>
            <h1>{props.item.name}</h1>
            <p>{props.item.name}</p>
            <p>{props.item.title}</p>
            <img src={props.item.icon} alt={props.item.name}/>
        </div>
    )
}

export default Item