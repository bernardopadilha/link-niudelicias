import styles from './styles.module.scss';

export function Header() {
  return(
    <section className={styles.container} >
      <div className={styles.content} >
        <div>
          <a href="#" title="Milennials Digital" ></a>
        </div>
        <div>
          <h2>Niu Delícias<br /> links <span>utilizavéis.</span></h2>
          <p><span>Por</span> Niu Delícias</p>
          <span>@niudelicias</span>
        </div>
      </div>
      <div className={styles.divider}></div>
    </section>
  );
}