import Head from 'next/head';

import { NewModal } from '../components/NewModal';

import styles from './home.module.scss';
import { FaAngleDown } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, {
  Pagination,
  Autoplay
} from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

export default function Home() {
  
  function handleButtonLink(link) {
    window.location.href= link
  }

  return (
    <div className={styles.container} >
      <Head>
        <title>Links | Niu Delicias</title>
      </Head>

        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://api.whatsapp.com/send?phone=5548996502797&text=Oii%2C%20tenho%20interesse%20em%20seus%20produtos!')}
        >
          Fale com um de nossos atendentes
        </button>

        <button
          type="button"
          className={styles.button}
          onClick={() => handleButtonLink('https://www.instagram.com/niudelicias/')}
        >
          Siga nosso perfil no instagram
        </button>

      <div className={styles.separator} ><FaAngleDown /></div>

      <Swiper pagination={{ 'clickable': true }} autoplay={{ 'delay': 4000, 'disableOnInteraction': false }} >
        {/* <SwiperSlide>
          <img className={styles.image} src="/banner_1.png" alt="Swift promotora" />
        </SwiperSlide> */}
      </Swiper>

      <footer>
        <h2>Obrigado!</h2>
        <span>@niudelicias</span>
      </footer>
    </div>
  )
}
