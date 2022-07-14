import { useState } from 'react';

import Modal from 'react-modal';

import { FaBullhorn, FaAngleRight, FaRobot, FaGitter } from 'react-icons/fa';
import styles from './styles.module.scss';

 
export function NewModalSocial() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);    
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleButtonLink(link) {
    window.location.href= link
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
          <h3>Social media</h3>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://milennialsdigital.com/services')}
        >
          Conhecer serviço <FaAngleRight />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://api.whatsapp.com/send?phone=5548991470458&text=Ol%C3%A1%2C%20estou%20vindo%20pelo%20link%20da%20Milennials%20Digital')}
        >
          Falar com um especialista <FaGitter />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://milennialswebservices.wispform.com/1375785d')}
        >
          Orçamento online <FaRobot />
        </button>

        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://www.behance.net/milennidigital')}
        >
          Ver nosso portfolio <FaRobot />
        </button>

        <div className={styles.divider}></div>

        <footer className={styles.footer} >
          <p>Serviço com a qualidade Milennials</p>
          <span>@milennialsdigital</span>
        </footer>
      </Modal>
      <button
        type="button"
        className={styles.button}
        onClick={handleOpenModal}
      >
        Social Media <FaBullhorn />
      </button>
    </>
  )
}