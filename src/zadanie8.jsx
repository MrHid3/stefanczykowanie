import avatars from '../data/avatars.json'
import Item from './Item4.jsx'

const App = () => {
    console.log(avatars)
    return (
        <div className={"flex"}>
            {avatars.map((avatar) => (
                <Item item={avatar}></Item>
            ))}
        </div>
    )
}

export default App;