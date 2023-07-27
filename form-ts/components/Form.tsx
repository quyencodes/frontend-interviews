interface Props {}

interface FormData {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
}

const initialState = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  phoneNumber: '',
}

import { useState } from 'react'

export default function Form({}: Props) {
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    alert(`User submitted: ${JSON.stringify(formData, undefined, 2)}`)
  }

  return (
    <form
      className="flex h-[500px] w-[400px] flex-col items-center justify-between rounded-lg bg-blue-300 p-8"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-4 text-3xl font-bold tracking-wide text-black">
        Register
      </h1>
      <div className="mb-4 flex w-full flex-row items-center justify-between">
        <label className="text-lg font-bold text-black">First Name: </label>
        <input
          onChange={(event) => {
            setFormData((prev) => ({ ...prev, firstName: event?.target.value }))
          }}
          className="rounded-lg p-2"
          placeholder="Enter first name"
        ></input>
      </div>
      <div className="mb-4 flex w-full flex-row items-center justify-between">
        <label className="text-lg font-bold text-black">Last Name: </label>
        <input
          onChange={(event) => {
            setFormData((prev) => ({ ...prev, lastName: event?.target.value }))
          }}
          className="rounded-lg p-2"
          placeholder="Enter last name"
        ></input>
      </div>
      <div className="mb-4 flex w-full flex-row items-center justify-between">
        <label className="text-lg font-bold text-black">Email Name: </label>
        <input
          onChange={(event) => {
            setFormData((prev) => ({
              ...prev,
              emailAddress: event?.target.value,
            }))
          }}
          className="rounded-lg p-2"
          placeholder="Enter email address"
        ></input>
      </div>
      <div className="mb-4 flex w-full flex-row items-center justify-between">
        <label className="text-lg font-bold text-black">Phone Number: </label>
        <input
          onChange={(event) => {
            setFormData((prev) => ({
              ...prev,
              phoneNumber: event?.target.value,
            }))
          }}
          className="rounded-lg p-2"
          placeholder="Enter phone number"
        ></input>
      </div>
      <button
        className="rounded-lg border-2 border-solid border-indigo-600 bg-indigo-600 p-2 text-white"
        type="submit"
      >
        Submit Information
      </button>
    </form>
  )
}
