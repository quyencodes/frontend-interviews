interface Props {}

import { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

import cities from '@lib/data'

export default function AdvancedDropdown({}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('this button is working')
    event.preventDefault()
    setIsOpen((prev) => !prev)
  }

  return (
    <section
      id="advancedDrop"
      className="align-center flex h-screen w-full justify-center bg-gradient-to-r from-pink-300 to-indigo-400"
    >
      <div className="align-center flex h-[600px] w-[400px] flex-col justify-center">
        <div
          className="relative flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-transparent bg-slate-200 p-4 active:border-slate-600"
          onClick={handleClick}
        >
          <button className="p-2 font-bold tracking-wide text-black">
            {value === '' ? 'Dropdown' : value}
          </button>
          {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
          <div className="absolute left-0 top-20 w-full ">
            {isOpen &&
              cities.map((item, index) => (
                <div
                  className="hover:border-r-rounded-lg mb-2 flex w-full cursor-pointer flex-row items-center justify-between rounded-lg border-l-2 border-transparent bg-slate-200 p-4 hover:border-l-white hover:bg-slate-100"
                  key={index}
                  onClick={() => {
                    setValue(item.city)
                  }}
                >
                  <div className="font-bold">{item.city}</div>
                  <div>{item.emoji}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
