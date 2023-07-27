import { useState } from 'react'

type Props = {}

export default function BasicDropDown({}: Props) {
  const [selectValue, setSelectValue] = useState<string>('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(`User has submitted their choice of ${selectValue}`)
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    if (event.target.value === '') return
    console.log(`User changed their option to choice of ${event.target.value}`)
    setSelectValue((prev: string) => (prev = event.target.value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="m-2">Please Select Starter Pokemon: </label>
      <select
        onChange={handleChange}
        className="m-2 rounded-lg border-2 border-solid border-black p-2"
      >
        <option value="">Select Pokemon</option>
        <option value="Charmander">Charmander</option>
        <option value="Bulbasaur">Bulbasaur</option>
        <option value="Squirtle">Squirtle</option>
      </select>
      <button
        className="m-2 rounded-lg border-2 border-solid border-black p-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
