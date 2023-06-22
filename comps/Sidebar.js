import styles from '../styles/SideBar.module.css';
import Image from 'next/image';

const SideBar = () => {
  return (
    <div className={styles.sideb}>
      <div className={styles.inicio}>
        <div className={styles.retan}>
          <Image src="/home.png" width={30} height={30} />
          <p>Início</p>
        </div>
      </div>
      <div className={styles.estudo}>
        <div className={styles.retan}>
          <Image src="/book.png" width={30} height={30} />
          <p>Estudo</p>
        </div>
      </div>
      <div className={styles.notas}>
        <div className={styles.retan}>
          <Image src="/nota.png" width={30} height={30} />
          <p>Notas</p>
        </div>
      </div>
      <div className={styles.desempenho}>
        <div className={styles.retan}>
          <Image src="/graph.png" width={30} height={30} />
          <p>Progressão do Aluno</p>
        </div>
      </div>
      <div className={styles.exit}>
        <div className={styles.retan}>
          <Image src="/exit.png" width={30} height={30} />
          <p>Sair</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;