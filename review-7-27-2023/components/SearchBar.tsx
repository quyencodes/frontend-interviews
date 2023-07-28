interface Props {}

import { useRef, useState } from 'react'

import AnimeListType from '@lib/types/index'

const AnimeList = [
  {
    name: 'Kaguya Sama Love-Is-War',
    description:
      'Popular anime centered around the life of the student council President and Vice President who like each other, but are too proud to admit it. They want the other person to confess first.',
  },
  { name: 'Jujutsu Kaisen', description: '' },
  { name: 'Summertime Rendering', description: '' },
  { name: 'Shadows House', description: '' },
  { name: 'Eighty-Six', description: '' },
  { name: 'Oshi No Ko', description: '' },
]

export default function SearchBar({}: Props) {
  const animeRef = useRef(AnimeList)
  const [animes, setAnimes] = useState<Array<AnimeListType>>(AnimeList)

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setAnimes((prev) => {
      return animeRef.current.filter((animeObj, index) =>
        animeObj.name.toLowerCase().includes(event.target.value)
      )
    })
  }

  return (
    <section
      id="searchbar"
      className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-sky-300"
    >
      <div className="flex h-[400px] flex-col">
        <input
          onChange={handleFilter}
          className="m-2 w-[400px] rounded-lg p-2 duration-200 hover:w-[600px]"
          type="text"
          placeholder="Search Anime Here"
        ></input>
        {animes.map((anime, index) => (
          <div
            className="m-2 flex w-[400px] flex-col  gap-4 rounded-lg bg-slate-100 p-2"
            key={index}
          >
            {anime.name}
          </div>
        ))}
      </div>
    </section>
  )
}
