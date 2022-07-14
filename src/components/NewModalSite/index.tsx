import React, { useState } from 'react';

import Iframe from 'next';

import Modal from 'react-modal';

import { FaGlobe, FaAngleRight, FaRobot, FaGitter } from 'react-icons/fa';
import styles from './styles.module.scss';
 
export function NewModalSite() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);    
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  
  function handleButtonLink(link) {
    window.location.href= link
  }

  function handleOpenModalVideo() {
    setOpenModalVideo(true);
  }

  function handleCloseModalVideo() {
    setOpenModalVideo(false);
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
          <h3>Desenvolvimento web</h3>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => setOpenModalVideo(true)}
        >
          Conhecer serviço <FaAngleRight />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://api.whatsapp.com/send?phone=5548996948270&text=Ol%C3%A1%2C%20estou%20vindo%20pelo%20link%20da%20Milennials%20Digital')}
        >
          Falar com um especialista <FaGitter />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://milennialswebservices.wispform.com/0c7572a6')}
        >
          Orçamento online <FaRobot />
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
        O que é a PSICOGENEALOGIA <FaGlobe />
      </button>
      <Modal
        isOpen={openModalVideo}
        onRequestClose={handleCloseModalVideo}
        overlayClassName="react-modal-video-overlay"
        className="react-modal-video-content"
      >
        <iframe  src="https://www.youtube.com/embed/_XxQwFQ8PX8?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </Modal>
    </>
  )
}