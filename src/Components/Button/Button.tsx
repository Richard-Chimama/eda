import React from 'react'
import * as S from './styled'


interface Props{
    value: string | number | readonly string[] | undefined,
    type?: "button" | "submit" | "reset" | undefined,
    onPress?: ()=>void
}

const Button: React.FC<Props> = ({
    value,
    type,
    onPress
}) => {
  return (
    <S.Button type={type} onClick={onPress}>{value}</S.Button>
  )
}

export default Button