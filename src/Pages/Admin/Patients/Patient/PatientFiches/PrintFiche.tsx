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


export default PrintFiche;
