import { MdOutlineRateReview } from "react-icons/md"
import { AiOutlineEye } from "react-icons/ai"
import UpdateFiche from './UpdateFiche'
import { FiPrinter } from 'react-icons/fi'
import React, { useState } from 'react'
import * as S from "./styled"
import PrintFiche from "./PrintFiche"
import { GET_DATE_TIME } from "../../../../../Functions/utility/UseFullFC"



const FichContent = ({data}:{data:any})=>{
    const [isUpdate, setIsUpdate] = useState(false)
    const [isView, setIsView] = useState(false)
    const [isPrint, setIsPrint] = useState(false)

   
    return <S.FicheContent >
      <S.Info>
        <span><strong className="label">Assiste par:</strong>
        <span  className="labelInfo">{data.users.length > 0 && data.users[0].username}</span></span>
        <div><strong>Date: </strong><span>{GET_DATE_TIME(data.createdAt)}</span></div>
      </S.Info>
      <S.Icons>
        <FiPrinter size="20" onClick={()=> setIsPrint(!isPrint)}/>
        <AiOutlineEye size="20" onClick={()=> setIsView(!isView)}/>
         <MdOutlineRateReview size="20" onClick={()=> setIsUpdate(!isUpdate)}></MdOutlineRateReview>
      </S.Icons>
      {isUpdate && <UpdateFiche close={setIsUpdate} data={data} state="update" />}
      {isView && <UpdateFiche close={setIsView} data={data} state="view" />}
      {isPrint && <PrintFiche data={data} close={setIsPrint} />}
</S.FicheContent>
}


export default FichContent