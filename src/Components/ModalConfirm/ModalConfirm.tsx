import { useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import userImg from "../../assets/user-img.png"
import api from '../../API';


interface Props{
    handleShow?: boolean | undefined
    handleClose: () => void,
    refetch: ()=>void,
    title: string,
    content: any,
}

const ModalConfirm: React.FC<Props> = ({title, content, handleShow, handleClose, refetch})=> {

    const [deleteUser, {error:UserError}] = useMutation(api.Mutations.DELETE_USER)

    const handleDelete = ()=>{
        deleteUser({variables:{user:content?.id},onCompleted:(data)=>{
            if(data){
                refetch()
                handleClose()
            }
        }})
    }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={handleShow}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="d-flex gap-2">
                 <img style={{height:"50px", width:"50px"}} src={content?.avatar ? content?.avatar : userImg} alt={content?.username} />
                 <div>
                     <p className='mb-0'><b>{content?.username}</b></p>
                     <p>{content?.email}</p>
                 </div>

            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Annuler</Button>
          <Button variant="danger" onClick={handleDelete}>Confirmer</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalConfirm