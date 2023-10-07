import { TaskType } from '@utils/types'
interface Props {
  element: TaskType
  updateTask: (id: number) => void
  deleteTask: (id: number) => void
}
export default function Item({ element, updateTask, deleteTask }: Props) {
  const completedStyle = {
    textDecoration: element.completed ? 'line-through' : 'none',
    color: element.completed ? 'green' : 'black',
  }

  return (
    <div className="m-2 flex flex-row items-center justify-center gap-2">
      <p style={completedStyle}>{element?.val}</p>
      <button
        onClick={() => {
          updateTask(element?.uid)
        }}
        className="b-2 border-2 border-black p-1"
      >
        Complete
      </button>
      <button
        onClick={() => {
          deleteTask(element?.uid)
        }}
        className="b-2 border-2 border-black p-1"
      >
        X
      </button>
    </div>
  )
}
