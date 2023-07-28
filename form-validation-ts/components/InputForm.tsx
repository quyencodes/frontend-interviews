import { FormInput } from '@custom/types'

interface Props {
  formObj: FormInput
  handleChange: (e: any) => void
}

import { useState } from 'react'

export default function InputForm({ formObj, handleChange }: Props) {
  const [clicked, setClicked] = useState(false)
  const [check, setCheck] = useState(false)

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = document.getElementById(formObj.id) as HTMLInputElement
    if (element) {
      let value = element.checkValidity()
      console.log(`${event?.target.name} is ${value}`)
      setCheck(value)
    }
  }

  return (
    <div className="mb-4 flex flex-col">
      <label>{formObj.label}</label>
      <input
        id={formObj.id}
        name={formObj.name}
        type={formObj.type}
        className=":invalid-border-red-700 w-[400px] rounded-lg border-2 border-solid border-gray-800 p-1"
        placeholder={formObj.placeholder}
        onChange={(e) => {
          handleChange(e)
        }}
        onBlur={(e) => {
          handleCheck(e)
          setClicked(true)
        }}
        required={formObj.required}
        pattern={formObj.pattern}
      />
      {!check && clicked && (
        <span className="mt-2 w-[400px] text-red-700">
          {formObj.errorMessage}
        </span>
      )}
    </div>
  )
}
