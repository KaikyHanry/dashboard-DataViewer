import Image from "next/image";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={162} height={29} />
      </div>
      <div className={styles.perfil}>
        <div className={styles.info}>
          <h4 className={styles.nome}>Rafael Diego Nogueira</h4>
          <a className={styles.txts}>Informações do perfil</a>
          <div className={styles.dark}>
            <p>Dark Mode</p>
            <div className={styles.toggle}>
              <i className={styles.indicator}></i>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <Image src="/perfil.png" width={88} height={88} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;