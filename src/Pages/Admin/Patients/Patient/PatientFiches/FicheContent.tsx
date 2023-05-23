import { MdOutlineRateReview } from "react-icons/md"
import { AiOutlineEye } from "react-icons/ai"
import UpdateFiche from './UpdateFiche'
import { FiPrinter } from 'react-icons/fi'
import React, { useState } from 'react'
import * as S from "./styled"



const FichContent = ({data}:{data:any})=>{
    const [isUpdate, setIsUpdate] = useState(false)
    const [isView, setIsView] = useState(false)
    return <S.FicheContent >
      <S.Info>
        <span><span className="label">Assiste par:</span>
        <span  className="labelInfo">{data.users[0].username}</span></span>
        <span>le: {new Date(data.createdAt).toLocaleDateString()}</span>
      </S.Info>
      <S.Icons>
        <FiPrinter size="20" />
        <AiOutlineEye size="20" style={{color: "white"}} onClick={()=> setIsView(!isView)}/>
         <MdOutlineRateReview size="20" onClick={()=> setIsUpdate(!isUpdate)}></MdOutlineRateReview>
      </S.Icons>
    {isUpdate && <UpdateFiche close={setIsUpdate} data={data} state="update" />}
    {isView && <UpdateFiche close={setIsView} data={data} state="view" />}
</S.FicheContent>
}


export default FichContent