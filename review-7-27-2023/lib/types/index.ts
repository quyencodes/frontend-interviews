export interface AnimeListType {
  name: string
  description?: string
}

export interface FormType {
  id: string
  name: string
  label: string
  type: string
  placeholder: string
  errorMessage?: string
  pattern?: string
  required: boolean
}
