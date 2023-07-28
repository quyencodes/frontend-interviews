import { FormType } from '@lib/types'
import { useState } from 'react'

export default function InputForm({ formObj, handleChange }: Props) {
  const [clicked, setClicked] = useState(false)
  const [valid, setValid] = useState(true)

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = document.getElementById(formObj.id) as HTMLInputElement

    // console.log(element)

    if (element) {
      let test = element.checkValidity()
      console.log(`${formObj.name} is ${test}`)
      setValid(test)
    }
  }

  return (
    <div className="flex flex-col">
      <label className="m-2">{formObj.label}</label>
      <input
        id={formObj.id}
        className="m-2 w-[300px] rounded-lg border-slate-300 p-2"
        placeholder={formObj.placeholder}
        pattern={formObj.pattern}
        name={formObj.name}
        type={formObj.type}
        required={formObj.required}
        onBlur={(event) => {
          setClicked(true)
          handleCheck(event)
        }}
        onChange={handleChange}
      ></input>
      {clicked && !valid && (
        <span className="text-bold m-2 max-w-[300px] break-words text-sm text-red-700">
          {formObj.errorMessage}
        </span>
      )}
    </div>
  )
}

interface Props {
  formObj: FormType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
