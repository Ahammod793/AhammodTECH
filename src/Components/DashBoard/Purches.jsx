// src/Components/Purches.jsx
import React, { useEffect, useRef } from 'react';
import { getLsProduct } from '../localStorageHundle/ProductHundleFormLS';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import purchesIMG from '../../assets/Group.png'
const Purches = ({ isModalOpen, closeModal,totalPrice }) => {

  const modalRef = useRef();
  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isModalOpen]);

const navigate = useNavigate()
const reset=()=>{
  localStorage.removeItem('product')
  navigate('/')
  toast.success('Successfully Purchesed!')
}
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box p-8 h-[320] w-96 flex flex-col gap-3 text-center items-center">
        <img src={purchesIMG} alt="Purches Icon" className='h-[70px] w-[70px]'/>
        <h1 className='font-bold text-[24px] text-[#09080F]'>Payment Successfully</h1>
        <h4 className='text-[16px] font-medium text-[#09080F99] '>Thanks for purchasing</h4>
        <p className='text-[16px] font-medium text-[#09080F99]'>Total : {totalPrice}</p>
        <div className="modal-action">
          <button className="btn btn-md w-52" onClick={() => { closeModal(); reset(); }}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Purches;
