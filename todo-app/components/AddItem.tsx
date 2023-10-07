import React, { useState } from 'react'

interface Props {}
export default function AddItem({ addTask }: Props) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(input)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="m-8 flex justify-center">
      <input
        onChange={handleChange}
        className="rounded-lg border-2 border-gray-600 p-1"
        type="text"
        placeholder="Add task"
      ></input>
      <button type="button" className="rounded-lg border-2 border-gray-600 p-2">
        Submit
      </button>
    </form>
  )
}
