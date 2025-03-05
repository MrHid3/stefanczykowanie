const Item = (props) => {
    return (
        <div className={"nice"}>
            {JSON.stringify(props, null, 5)}
        </div>
    )
}

export default Item