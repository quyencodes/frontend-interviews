interface Props {
  count: number
  setCount: (x: number) => void
}

export default function Button({ count, setCount }: Props) {
  function incrementCount() {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button
        className="rounded-lg border-2 border-solid border-black p-4"
        onClick={incrementCount}
      >
        Click me to increment the count
      </button>
    </>
  )
}
