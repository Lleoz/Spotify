import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../../actions/modal';
import './ModalDetails.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const ModalDetails = () => {

  const {modalOpen, data} = useSelector(state => state.modal) 

  const dispatch = useDispatch( )

  const closeModal = () => {
    dispatch(modalClose());
  }
    
    return (
        <Modal
        isOpen={ modalOpen }
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className='modal'
        overlayStyle='modal-fondo'>
            <h1 className='text-center'>{data.name}</h1>
            <br></br>
            <div className='row'>
              <span className='col-6'>Id de la Canción: </span> <span className='col-6 text-break'>{data.id}</span>
            </div>
            <div className='row'>
              <span className='col-6'>Preview de la Canción: </span>
              <audio className='col-6 float-end' id={data.name} src={data.preview_url} controls='1'>
               </audio>
            </div>
            <div className='row'>
              <span className='col-6'>Artista:  </span> <span className='col-6 text-break'>{data.artists}</span>
            </div>
        </Modal>
    )
}
