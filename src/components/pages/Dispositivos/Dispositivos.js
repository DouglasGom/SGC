import styles from "./Dispositivos.module.css";
import catraca from "../../../img/catraca.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Dispositivos() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Dispositivos</h1>
      <div className={styles.cards}>
        <div className={styles.cardContainer}>
          <h3 className={styles.cardTitle}>Catraca</h3>
          <h4 className={styles.cardModel}>Modelo: iD Block M1</h4>
          <p className={styles.cardArea}>Área: Entrada</p>
          <img src={catraca} alt="catraca" />
        </div>

        <div className={styles.cardContainer}>
          <h3 className={styles.cardTitle}>Catraca</h3>
          <h4 className={styles.cardModel}>Modelo: iD Block M1</h4>
          <p className={styles.cardArea}>Área: Entrada</p>
          <img src={catraca} alt="catraca" />
        </div>

        <button onClick={() => {alert("Botão clicado")}} className={styles.iconButton}>
          <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />{" "}
          Adicionar dispositivo
        </button>
      </div>
    </div>
  );
}

export default Dispositivos;
