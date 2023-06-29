import React from 'react'
import * as S from './styled'


interface Props{
    value: string | number | readonly string[] | undefined,
    type?: "button" | "submit" | "reset" | undefined,
    styles?: Object
    onPress?: ()=>void
}

const Button: React.FC<Props> = ({
    value,
    type,
    styles,
    onPress
}) => {
  return (
    <S.Button style={styles} type={type} onClick={onPress}>{value}</S.Button>
  )
}

export default Button