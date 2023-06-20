import React from 'react'
import * as S from "./styled"
import api from '../../API'
import { useQuery } from '@apollo/client'
import BellNotification from './BellNotification'

interface Props{
  onPress: ()=> void
}

const Header:React.FC<Props> = ({onPress}) => {

  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" onClick={onPress} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div>
              <BellNotification count={14} />
            </div>
          </div>
        </nav>
     </>
)
  
}

export default Header 