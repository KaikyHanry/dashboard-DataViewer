import styles from '../styles/Home.module.css';

const Paper = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.block}>

          <div className={styles.square}>
            <h4>Notas</h4>
            <div className={styles.unds} >
              <div className={styles.und}>
                <h2>7,9</h2>
                <p>Unidade 1</p>
              </div>
              <div className={styles.und}>
                <h2>8,7</h2>
                <p>Unidade 2</p>
              </div>
              <div className={styles.und}>
                <h2>9,8</h2>
                <p>Unidade 3</p>
              </div>
              <div className={styles.media}>
                <h2>8,8</h2>
                <p>Média</p>
              </div>
            </div>
          </div >

          <div className={styles.square}>
            <h4>Unidade I</h4>
            <div className={styles.unds} >
              <div className={styles.und}>
                <h2>10,0</h2>
                <p>Presenças</p>
              </div>
              <div className={styles.und}>
                <h2>8,7</h2>
                <p>Listas</p>
              </div>
              <div className={styles.und}>
                <h2>9,8</h2>
                <p>Prova</p>
              </div>
              <div className={styles.media}>
                <h2>7,9</h2>
                <p>Total</p>
              </div>
            </div>
          </div >
        </div>

        <div className={styles.block}>
          <div className={styles.square}>
            <h4>Unidade II</h4>
            <div className={styles.unds} >
              <div className={styles.und}>
                <h2>5,0</h2>
                <p>Presenças</p>
              </div>
              <div className={styles.und}>
                <h2>8,7</h2>
                <p>Listas</p>
              </div>
              <div className={styles.und}>
                <h2>9,8</h2>
                <p>Prova</p>
              </div>
              <div className={styles.media}>
                <h2>7,5</h2>
                <p>Total</p>
              </div>
            </div>
          </div >

          <div className={styles.square}>
            <h4>Unidade III</h4>
            <div className={styles.unds} >
              <div className={styles.und}>
                <h2>5,0</h2>
                <p>Presenças</p>
              </div>
              <div className={styles.und}>
                <h2>6,7</h2>
                <p>Listas</p>
              </div>
              <div className={styles.und}>
                <h2>4,8</h2>
                <p>Prova</p>
              </div>
              <div className={styles.media}>
                <h2>5,8</h2>
                <p>Total</p>
              </div>
            </div>
          </div >
        </div>

        <div className={styles.subcard}>
          <div className={styles.minor}>
            <h4>Presença - Unidade I</h4>
            <div className={styles.labs}>
              <div className={styles.und}>
                <h2>1,0</h2>
                <p>Lab 1</p>
              </div>
              <div className={styles.und}>
                <h2>1,0</h2>
                <p>Lab 2</p>
              </div>
              <div className={styles.lmed}>
                <h1>10,0</h1>
                <p>Total</p>
              </div>
            </div>
          </div>
          <div className={styles.minor}>
            <h4>Presença - Unidade II</h4>
            <div className={styles.labs}>
              <div className={styles.und}>
                <h2>1,0</h2>
                <p>Lab 3</p>
              </div>
              <div className={styles.und}>
                <h2>0,0</h2>
                <p>Lab 4</p>
              </div>
              <div className={styles.lmed}>
                <h1>5,0</h1>
                <p>Total</p>
              </div>
            </div>
          </div>
          <div className={styles.minor}>
            <h4>Presença - Unidade III</h4>
            <div className={styles.labs}>
              <div className={styles.und}>
                <h2>0,0</h2>
                <p>Lab 5</p>
              </div>
              <div className={styles.und}>
                <h2>1,0</h2>
                <p>Lab 6</p>
              </div>
              <div className={styles.lmed}>
                <h1>5,0</h1>
                <p>Total</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subcard}>
          <div className={styles.minor}>
            <h4>Comentários - Prova 01</h4>
            <p>Ok</p>
          </div>
          <div className={styles.minor}>
            <h4>Comentários - Prova 02</h4>
            <p>Link bloqueado</p>
          </div>
          <div className={styles.minor}>
            <h4>Comentários - Prova 03</h4>
            <p>Faltou realizar os testes, melhorar a indentação e as explicações sobre o algoritmo desenvolvido</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paper;