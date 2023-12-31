import Head from 'next/head'

import { useState, useRef } from 'react'
import { Movies } from '@customTypes/declarations'

import SearchBar from '@components/SearchBar'

const initialState: Array<Movies> = [
  {
    title: 'Kaguya Sama Love Is War',
    description: 'Rom-com anime created from Asa Akasaka',
  },
  { title: 'Oshi No Ko', description: 'Successor of Kaguya Sama Love Is War' },
  {
    title: 'Jujutsu Kaisen',
    description: 'Shounen anime based on Jujutsu sorcery',
  },
]

export default function Home() {
  const moviesRef = useRef(initialState)
  const [movies, setMovies] = useState<Array<Movies>>(initialState)

  const handleSearch = (event: any): void => {
    event.preventDefault()
    console.log('searching...', event.target.value)
    let filteredMovies: Array<Movies> = movies.filter((movie, index) =>
      movie['title'].toLowerCase().includes(event.target.value.toLowerCase())
    )

    setMovies(filteredMovies)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex h-screen w-full bg-gradient-to-r from-sky-600 to-indigo-600 font-bodyFont">
        <SearchBar
          movies={movies}
          handleSearch={handleSearch}
          moviesRef={moviesRef}
          setMovies={setMovies}
        />
      </main>
    </>
  )
}
