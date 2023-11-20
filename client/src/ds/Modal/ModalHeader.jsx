import React from 'react'
import "./Modal.css";

const ModalHeader = ({children}) => {
  return (
    <div className='modal-header'>{children}</div>
  )
}

export default ModalHeader