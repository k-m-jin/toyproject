import { memo } from 'react'
interface Props {
  id: string
  label: string
  errorMsg: string | undefined
  inputProps: string[]
}
const FormInput = ({ id, label, errorMsg, inputProps }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
      <div>{errorMsg}</div>
    </div>
  )
}

export default memo(FormInput, (prevProps, nextProps) => prevProps.errorMsg === nextProps.errorMsg)
