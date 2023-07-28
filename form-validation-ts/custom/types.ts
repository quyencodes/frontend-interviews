export interface UserInput {
  username: string
  email: string
  date: string
  password: string
  confirmPassword: string
}

export interface FormInput {
  id: string
  name: string
  type: string
  label: string
  placeholder: string
  pattern?: string
  errorMessage: string
  required: boolean
}
