import { useEffect, useCallback } from 'react'
import FormInput from '../FormInput'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { doSignUp } from '../../../store/slice/userSlice'

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')
const EMAIL_REGEX = new RegExp('/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i')
const PHONE_REGEX = new RegExp('^00(?=[1‑9]d{0,2}[1‑9])(?=d{2,15}$)d+$')

const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
  invaliEmail: '이메일 형식에 일치하지 않습니다.',
  invalidPhone: '휴대폰 번호 형식에 일치하지 않습니다.',
}

type FormInputs = {
  id: string
  pw: string
  confirmPw: string
  email: string
  phone: string
}
const Form = () => {
  const { register, handleSubmit, setFocus, getValues, formState, trigger } = useForm<FormInputs>({
    mode: 'onBlur',
  })

  const dispatch = useDispatch()

  const onSubmit = useCallback(() => {
    // console.log(getValues())
    const userData = getValues()
    dispatch(doSignUp(userData))
  }, [])

  useEffect(() => {
    setFocus('id', { shouldSelect: true })
  }, [])

  return (
    <>
      <form id='form' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id={'id'}
          label={'아이디'}
          errorMsg={formState.errors['id']?.message}
          inputProps={{
            type: 'text',
            placeholder: '아이디를 입력해주세요.',
            ...register('id', {
              pattern: {
                value: ID_REGEX,
                message: ERROR_MSG.invalidId,
              },
              required: ERROR_MSG.required,
            }),
          }}
          // trigger={trigger}
        />

        <FormInput
          id={'pw'}
          label={'비밀번호'}
          errorMsg={formState.errors['pw']?.message}
          inputProps={{
            type: 'password',
            placeholder: '비밀번호를 입력해주세요',
            autoComplete: 'off',
            ...register('pw', {
              pattern: {
                value: PW_REGEX,
                message: ERROR_MSG.invalidPw,
              },
              required: ERROR_MSG.required,
              onBlur: () => trigger('confirmPw'),
            }),
          }}
        />
        <FormInput
          id={'confirmPw'}
          label={'비밀번호 확인'}
          errorMsg={formState.errors['confirmPw']?.message}
          inputProps={{
            type: 'password',
            placeholder: '비밀번호 확인을 입력해주세요.',
            autoComplete: 'off',
            ...register('confirmPw', {
              validate: {
                sameWithPw: (v) => v === getValues('pw') || ERROR_MSG.invalidConfirmPw,
              },
              required: ERROR_MSG.required,
            }),
          }}
        />
        <FormInput
          id={'email'}
          label={'이메일 주소'}
          errorMsg={formState.errors['email']?.message}
          inputProps={{
            type: 'text',
            placeholder: '이메일를 입력해주세요.',
            ...register('email', {
              // pattern: {
              //   value: EMAIL_REGEX,
              //   message: ERROR_MSG.invaliEmail,
              // },
              required: ERROR_MSG.required,
            }),
          }}
        />
        <FormInput
          id={'phone'}
          label={'휴대폰 번호'}
          errorMsg={formState.errors['phone']?.message}
          inputProps={{
            type: 'text',
            placeholder: '하이폰이 없는 숫자로만 입력',
            ...register('phone', {
              // pattern: {
              //   value: PHONE_REGEX,
              //   message: ERROR_MSG.invalidPhone,
              // },
              required: ERROR_MSG.required,
            }),
          }}
        />
        <div>
          <input id='submit' type='submit' value='가입하기' />
        </div>
      </form>
    </>
  )
}

export default Form
