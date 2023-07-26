import { useState, useRef } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  const incrementCount = () => {
    setCount(count + 1)
    countRef.current++
    // console.log(`User clicked Increment Count button: ${count} times`)
    console.log(
      `User clicked Increment Count button: ${countRef.current} times`
    )
  }

  return (
    <section className="mx-auto min-h-full max-w-container py-10 text-center align-middle">
      <p>{count}</p>
      <button
        className="rounded-lg border-2 border-black p-2"
        onClick={incrementCount}
      >
        Increment Count
      </button>
    </section>
  )
}
