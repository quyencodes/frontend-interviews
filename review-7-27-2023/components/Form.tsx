import { useState } from 'react'
import { FormType } from '@lib/types'
import InputForm from '@components/utils/InputForm'

export default function Form({}: Props) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    date: '',
    password: '',
    confirmPassword: '',
  })

  const FormData: Array<FormType> = [
    {
      id: '0',
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: 'At least 1 letter, 1 number and 8-16 characters only',
      pattern: '^[a-zA-Z0-9]{3,16}$',
      required: true,
    },
    {
      id: '1',
      name: 'email',
      label: 'Email Address',
      errorMessage: 'Should be valid email address',
      type: 'email',
      placeholder: 'Email Address',
      required: true,
    },
    {
      id: '2',
      name: 'date',
      label: 'Date of Birth',
      type: 'date',
      placeholder: '',
      required: true,
    },
    {
      id: '3',
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'At least 1 letter, 1 number, 1 special character and 8-20 characters long',
      pattern:
        '^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{7,19}$',
      required: true,
    },
    {
      id: '4',
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Must match password',
      pattern: userData.password,
      required: true,
    },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log('User is adding to the object: ', event.target.value)
    setUserData((prev) => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }

  const handleSubmit = () => {
    alert(`User submitted ${JSON.stringify(userData, undefined, 2)}`)
  }

  return (
    <section
      id="form"
      className="flex h-screen w-full items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className="flex h-[650px] w-[500px] flex-col items-center rounded-lg border-2 border-black bg-slate-400"
      >
        <h1 className="m-2 text-center text-2xl">Register</h1>
        {FormData.map((form, index) => (
          <InputForm key={index} formObj={form} handleChange={handleChange} />
        ))}
        <button className="m-2 mt-8 h-[35px] w-[100px] rounded-lg bg-white text-slate-800">
          Submit
        </button>
      </form>
    </section>
  )
}

interface Props {}
