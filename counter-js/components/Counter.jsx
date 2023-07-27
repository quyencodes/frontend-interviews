import { useState, useEffect, useRef } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [someObject, setSomeObject] = useState({
    foo: 'bar',
    count: 0,
  })

  const incrementCount = () => {
    const newCount = count + 1
    setCount(newCount)
    console.log('newCount', newCount)
    setSomeObject((prev) => ({
      ...prev,
      count: prev.count + 1,
    }))
  }

  // useEffect(() => {
  //   console.log(`User clicked Increment Count button: ${count} times`)
  //   console.log('someObject', someObject)
  // }, [count, someObject])

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
