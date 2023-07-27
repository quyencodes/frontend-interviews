import { useState } from 'react'

type Props = {}

export default function Counter({}: Props) {
  const [count, setCount] = useState<number>(0)
  const [cbCount, setCBCount] = useState<number>(0)

  const incrementCount = (event: any): void => {
    event.preventDefault()
    setCount(count + 1)
    setCBCount((prev) => {
      console.log(prev + 1)
      return prev + 1
    })
    // console.log('count:', count)
    // console.log('cbCount:', cbCount)
  }

  // console.log(`Re-render log directCount: ${count}`)
  // console.log(`Re-render log callbackCount: ${cbCount}`)

  return (
    <section>
      <div className="align-items flex flex-row">
        <p className="m-2 mr-10">{count}</p>
        <button
          className="rounded-lg border-2 border-solid border-black p-2"
          onClick={incrementCount}
        >
          Increment Count
        </button>
      </div>
    </section>
  )
}
