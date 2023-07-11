import React, { forwardRef} from 'react';
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import PrintableFiche from "../../../../../Components/PrintableFiche";
import styled from 'styled-components';
import TwoActionButtons from '../../../../../Components/TwoActionButtons';
import { BsPrinter } from "react-icons/bs"
import { useQuery } from '@apollo/client';
import API from '../../../../../API';
import StateMessage from '../../../../../Components/StateMessage';
import { Button, Modal } from 'react-bootstrap';

interface PrintFicheProps {
  close: (e:boolean) => void;
  data: any,
  show: boolean
}

const PrintFiche: React.FC<PrintFicheProps> = forwardRef<any, PrintFicheProps>(({ close, data, show }, ref) => {
  const hospitalId = localStorage.getItem("hospitalID")
  const {loading, error, data:hospitalData } = useQuery(API.Queries.findHospitalById,
      {variables:{hospitalId: hospitalId}})

    console.log(hospitalData)

    const handleAction2 = ()=>{
        const link = document.getElementsByClassName("pdf-download-link") as any;
            link[0].click()
            close(false) 
    }

    if(error){
      alert("Problem de réseau, Vérifier votre réseau!!")
      return <StateMessage error={error.message} />
    }
 

  return (
    <Modal show={show} onHide={()=> close(false)}>
          <Modal.Header closeButton>
              <Modal.Title>Voulez-vous imprimer?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
            <BsPrinter size={50} color="#228558"/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant={"secondary"} onClick={()=> close(false)}>
              Annuler
            </Button>
            <Button variant={"success"} onClick={handleAction2}>
            Télécharger PDF
            </Button>
          </Modal.Footer>
       
    {/*   <TwoActionButtons
        label1="Annuler"
        label2={"Télécharger PDF"}
        action1={() => close(false)}
        action2={handleAction2}
      /> */}


        <PDFDownloadLink
        ref={ref}
        className="pdf-download-link"
        document={<PrintableFiche data={data} hospital={hospitalData.hospital} />}
        fileName={`${data.patient.id_card}.pdf`}
        style={{ display: "none" }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Télécharger PDF"
        }
      </PDFDownloadLink>
    </Modal>
    
  );
});

/* const Container = styled.div`
  position: absolute;
  background-color: #fff;
  color: #000;
  height: 200px;
  width: 50%;
  z-index: 9999;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.3);
  border-radius:15px;
  padding: 20px 50px;

  & > .info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
        top:15%;
        left: 5%;
        width: 80%;
        margin: 0 auto;
        padding: 20px 20px;
        height: 150px;
  }
`; */

export default PrintFiche;
