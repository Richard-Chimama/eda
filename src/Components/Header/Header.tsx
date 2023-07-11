import React from 'react'
import * as S from "./styled"
import api from '../../API'
import { useQuery } from '@apollo/client'
import BellNotification from './BellNotification'
import { CiMenuKebab } from 'react-icons/ci'
import ReportProblem from './ReportProblem'

interface Props{
  onPress: ()=> void
}

const Header:React.FC<Props> = ({onPress}) => {

  return (
    <>
       <S.Container className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" onClick={onPress} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <S.Content className="content">
              <div></div>
              <div className='d-flex justify-center gap-3'>
                {/* <BellNotification count={14} /> */}
               <ReportProblem />
              </div>
            </S.Content>
          </div>
        </S.Container>
     </>
)
  
}

export default Header 