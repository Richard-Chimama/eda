import React, { forwardRef} from 'react';
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import PrintableFiche from "../../../../../Components/PrintableFiche";
import styled from 'styled-components';
import Button from '../../../../../Components/Button';
import TwoActionButtons from '../../../../../Components/TwoActionButtons';
import { BsPrinter } from "react-icons/bs"

interface PrintFicheProps {
  close: (e:boolean) => void;
  data: any
}

const PrintFiche: React.FC<PrintFicheProps> = forwardRef<any, PrintFicheProps>(({ close, data }, ref) => {

    console.log(data)

    const handleAction2 = ()=>{
        const link = document.getElementsByClassName("pdf-download-link") as any;
            link[0].click()
            close(false)
    }
 

  return (
    <Container>
        <div className="info">
            <BsPrinter size={50} color="#228558"/>
            <div>
                <h3>Voulez-vous imprimer?</h3>
            </div>
        </div>
      <TwoActionButtons
        label1="Annuler"
        label2={"Télécharger PDF"}
        action1={() => close(false)}
        action2={handleAction2}
      />

        <PDFDownloadLink
        ref={ref}
        className="pdf-download-link"
        document={<PrintableFiche data={data} />}
        fileName="test.pdf"
        style={{ display: "none" }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Télécharger PDF"
        }
      </PDFDownloadLink>
    </Container>
    
  );
});

const Container = styled.div`
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
`;

export default PrintFiche;
