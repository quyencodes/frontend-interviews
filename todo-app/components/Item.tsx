interface Props {}
export default function Item({element, updateTask}: Props) {
    
    const completedStyle = {
        textDecoration: element.completed ? 'line-through' : 'none',
        color: element.completed ? 'green' : 'black',
    }
    
    return (
        <div className="flex flex-row justify-center items-center gap-2 m-2">
            <p>{element?.val}</p>
            <button onClick={updateTask} className="b-2 border-black border-2 p-1">Complete</button>
            <button className="b-2 border-black border-2 p-1">X</button>
        </div>
    )
}