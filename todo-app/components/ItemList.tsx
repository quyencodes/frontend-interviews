// local imports
import Item from '@components/Item'
// type imports
import { TaskType } from '@utils/types'

interface Props {
  data: TaskType[]
  updateTask: (id: number) => void
  deleteTask: (id: number) => void
}
export default function ItemList({ data, updateTask, deleteTask }: Props) {
  return (
    <ul>
      {data.map((obj, index) => (
        <Item
          element={obj}
          key={index}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}
