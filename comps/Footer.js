import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      Plataforma DataViewer. Universidade Federal do Rio Grande do Norte
      <div className={styles.acess}>
        <h2>Último acesso ao site</h2>
        <h3>Segunda. 07 Jun 2021 18:02</h3>
        <h4>(20 seg)</h4>
      </div>
    </footer>
  );
}

export default Footer;