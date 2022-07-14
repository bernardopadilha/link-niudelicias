import { useState } from 'react';

import Modal from 'react-modal';

import { FaBullseye, FaAngleRight, FaRobot, FaGitter } from 'react-icons/fa';
import styles from './styles.module.scss';

interface NewModalProps {
  title: string;
  titleButton: string;
  children: React.ReactNode;
}

 
export function NewModal({ title, titleButton, children }: NewModalProps) {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);    
  }

  function handleCloseModal() {
    setOpenModal(false);
  }



  return (
    <>
      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <div className={styles.profileModal} >
          <a href="" title="Milennials Digital"></a>
          <h3>{title}</h3>
        </div>

        {children}

        <div className={styles.divider}></div>

        <footer className={styles.footer} >
          <p>Qualidade Franciany Madeira</p>
          <span>@francianymadeira</span>
        </footer>
      </Modal>
      <button
        type="button"
        className={styles.button}
        onClick={handleOpenModal}
      >
        {titleButton}
      </button>
    </>
  )
}