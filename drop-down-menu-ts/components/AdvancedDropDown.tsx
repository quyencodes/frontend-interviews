import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import emotes from '@/public/index'
import { useState } from 'react'

interface Props {}

export default function AdvancedDropDown({}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex h-[340px] w-[340px] flex-col items-center rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border-4 border-transparent bg-blue-400 p-4 text-lg font-bold tracking-wide duration-300 active:border-white active:text-white"
      >
        Dropdown
        {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </button>
      {isOpen && (
        <div className="absolute top-20 flex w-full flex-col items-start rounded-lg bg-blue-400 p-2">
          {emotes.map((item, index) => (
            <div
              className="flex w-full cursor-pointer justify-between rounded-r-lg border-l-4 border-l-transparent p-4 hover:border-l-white hover:bg-blue-300"
              key={index}
            >
              <h3 className="font-bold">{item.city}</h3>
              <h3>{item.emoticon}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
