import { Movies } from '@customTypes/declarations'

interface Props {
  movies: Array<Movies>
  handleSearch: (event: any) => void
  setMovies: (prev: Array<Movies>) => void
  moviesRef: any
}

export default function SearchBar({
  movies,
  handleSearch,
  setMovies,
  moviesRef,
}: Props) {
  return (
    <div className="h-screen w-[400px]">
      <input
        className="m-2 h-[50px] w-full rounded-lg border-2 border-solid border-blue-600 p-4 duration-100 focus:w-[600px] focus:border-black"
        placeholder="Search Anime Here..."
        onChange={handleSearch}
        onBlur={(event) => {
          event.target.value = ''
          setMovies(moviesRef.current)
        }}
      />
      <div className="m-2 flex flex-col gap-4">
        {movies.length ? (
          <>
            {movies.map((movie, index) => (
              <div className="w-full rounded-lg bg-white p-4" key={index}>
                {movie.title}
              </div>
            ))}{' '}
          </>
        ) : (
          'No movies'
        )}
      </div>
    </div>
  )
}
