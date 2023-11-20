import React from 'react'
import "./Modal.css";

const ModalContent = ({children}) => {
  return (
    <div className='modal-content'>{children}</div>
  )
}

export default ModalContent