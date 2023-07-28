import { useState } from 'react'

type Props = {}

export default function Counter({}: Props) {
  const [count, setCount] = useState<number>(0)

  const handleIncrement = (): void => {
    setCount((prev) => {
      return prev + 1
    })
  }

  return (
    <section
      id="counter"
      className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-sky-600 to-indigo-600"
    >
      <div className="m-2 tracking-wide text-gray-200">Current: {count}</div>
      <button
        className="mb-2 rounded-lg border-2 border-solid border-gray-200 p-2 text-gray-200"
        onClick={handleIncrement}
      >
        Increment Count
      </button>
      <button
        className="mb-2 rounded-lg border-2 border-solid border-gray-200 p-2 text-gray-200"
        onClick={() => {
          setCount((prev) => prev + 5)
        }}
      >
        Increment By 5
      </button>
      <button
        className="rounded-lg border-2 border-solid border-gray-200 p-2 text-gray-200"
        onClick={() => {
          setCount(0)
        }}
      >
        Reset Counter
      </button>
    </section>
  )
}
