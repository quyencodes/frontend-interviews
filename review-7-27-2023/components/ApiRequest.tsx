import { useState, useEffect } from 'react'
import axios from 'axios'

interface Props {}

interface RandomUser {
  gender: 'male' | 'female'
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number | string
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number | string
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  login: {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  dob: {
    date: string
    age: string | number
  }
  registered: {
    date: string
    age: string | number
  }
  phone: string
  cell: string
  id: {
    name: string
    value: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}

export default function ApiRequest({}: Props) {
  const [randomUserJSON, setRandomUserJSON] = useState('')
  const [randomUsers, setRandomUsers] = useState<Array<RandomUser>>([])
  const [num, setNum] = useState(0)

  const fetchRandomUserData = (pageNumber: number = 0) => {
    return axios
      .get(`https://randomuser.me/api?page=${pageNumber}`)
      .then(({ data: { results } }) => {
        // setRandomUserJSON(JSON.stringify(results, undefined, 2))
        setRandomUsers([...randomUsers, ...results])
      })
      .catch((err) => console.log(err))
  }

  const handleNewUser = () => {
    setNum((prev) => {
      fetchRandomUserData(prev + 1)
      return prev + 1
    })
  }

  useEffect(() => {
    fetchRandomUserData()
  }, [])

  return (
    <section
      id="apirequest"
      className="flex h-screen w-full flex-col flex-wrap items-center justify-center bg-gradient-to-r from-neutral-600 to-gray-800"
    >
      {/* <pre className="text-sm">{randomUserJSON}</pre> */}
      {randomUsers.map((randomUser, index) => (
        <div key={index}>
          <div className="font-bold">
            {' '}
            Name: {randomUser?.name.first} {randomUser?.name.last}
          </div>
          <img
            src={randomUser.picture.thumbnail}
            width="100"
            height="100"
            alt="profilePicture"
          ></img>
        </div>
      ))}
      <button
        onClick={handleNewUser}
        className="m-2 rounded-lg border-2 border-solid border-black bg-neutral-300 p-2"
      >
        Display More Users
      </button>
    </section>
  )
}
