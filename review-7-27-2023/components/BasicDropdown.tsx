import {useState} from 'react'

interface Props {

}

export default function BasicDropdown({}: Props) {
  const [pokemon, setPokemon] = useState('')

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault()
    alert(`User successfully chosen ${pokemon}. Registering User now.`)
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setPokemon((prev) => {
      console.log(`User has selected ${event.target.value}`)
      return event.target.value
    })
  }

  return (
    <section id="basicDrop" className="h-screen w-full bg-gradient-to-r from-slate-600 to-purple-600 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <label className="p-2 m-2 text-white">Select Your Starter Pokemon!</label>
        <div className="flex flex-row">
          <select className="rounded-lg p-2 m-2 cursor-pointer" onChange={handleChange}>
            <option value="">Starter Pokemons</option>
            <option value="Charmander">Charmander</option>
            <option value="Bulbasaur">Bulbasaur</option>
            <option value="Squirtle">Squirtle</option>
          </select>
          <button onClick={handleSelect} type="submit" className="p-2 m-2 bg-white border-transparent border-2 active:border-gray-900 hover:border-gray-600 rounded-lg">Submit</button>
        </div>
      </div>
    </section>
  )
}