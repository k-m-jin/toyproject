import { memo } from 'react'
interface Props {
  id: string | number
  label: string
  errorMsg: string
  inputProps: string[]
  // trigger?: boolean
}
const FormInput = ({ id, label, errorMsg, inputProps, trigger }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
      <div>{errorMsg}</div>
    </div>
  )
}

export default memo(FormInput, (prevProps, nextProps) => prevProps.errorMsg === nextProps.errorMsg)
