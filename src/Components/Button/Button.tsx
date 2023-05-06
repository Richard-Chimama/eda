import React from 'react'
import * as S from './styled'


interface Props{
    label: string,
    onPress?: ()=>void
}

const Button: React.FC<Props> = ({
    label,
    onPress
}) => {
  return (
    <S.Button onClick={onPress}>{label}</S.Button>
  )
}

export default Button