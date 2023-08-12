import React,{useState} from 'react'
import EditUser from './EditUser'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../store/userReducer';
import { connect } from 'react-redux';

function UserCard({user,deleteUser,index,editData}) {

  const [show,setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
  return (
    <div className='bg-white py-4 px-3 m-3 rounded-3 shadow g-col-6 '>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditUser editInfo={user} editData={editData} closeModal={handleClose}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        <h3 className='text-secondary'>Codetrain User</h3>
        <hr />
        <h2>{user.name}</h2>
        <h4>Email : {user.email}</h4>
        <h4>Gen : {user.gen}</h4>
        <div className='mt-3'>
        <Button
          onClick={handleShow}
          variant="primary"
          >Edit</Button>
        <button className='mx-3 btn btn-danger' onClick={()=>deleteUser(index)}>Delete</button>
        </div>
        
    </div>
  )
}

const mapDispatch=(dispatch)=>{
  return {
    deleteUser: (id) => dispatch(deleteUser(id))
  }
}



export default connect(null,mapDispatch) (UserCard)