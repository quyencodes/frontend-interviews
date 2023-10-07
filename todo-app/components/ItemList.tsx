import Item from '@components/Item'

interface Props {}
export default function ItemList({data, updateTask}: Props) {
    return (
        <ul>
            {data.map((obj, index) => (
                <Item element={obj} key={index} updateTask={updateTask}/>
            ))}
        </ul>
    )
}