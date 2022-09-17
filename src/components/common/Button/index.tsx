import React, { useState } from 'react'
import * as S from './style'

export interface Props {
  size: number
  children?: string
  active: boolean
  Fontsize: number
}
function Button({ size, children, active, Fontsize, ...rest }: Props) {
  return (
    <S.Button size={size} active={active} {...rest}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  size: 'large',
}

export default Button
