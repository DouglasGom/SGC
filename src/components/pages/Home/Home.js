import React from "react";
import styles from "./Home.module.css";
import user from "../../../img/user.png";

const Monitoramento = () => {
  return (
    <div className={styles.container}>
      {/* Wrapper para manter o título e o cartão empilhados */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Monitoramento</h1>
      </div>
      {/* Cartão de acesso */}
      <div className={styles.accessCard}>
        <div className={styles.userImageContainer}>
          <img src={user} alt="user" className={styles.userImage} />
        </div>
        <div>
          <div>
            <p className={styles.date}>10/03/2025 - 10:59:48</p>
            <a href="/login" style={{textDecoration: 'none'}}><p className={styles.name}>Fulano Oliveira</p></a>
            <p>Área: Portaria Principal</p>
            <p>Dispositivo: Catraca Esquerda (iDBlock)</p>
            <p className={styles.accessRequired}>
              Acesso requerido 
              <a href="/" style={{textDecoration: "none"}}><span className={styles.iconCheck}>✔</span>{" "}</a>
              <a href="/" style={{textDecoration: "none"}}><span className={styles.iconCross}>✘</span></a>
            </p>
          </div>
        </div>
      </div>

    <div className={styles.tableContainer}>
      <table className={styles.accessTable}>
        <thead>
          <tr>
            <th>Data e Hora</th>
            <th>Perfil</th>
            <th>Área</th>
            <th>Dispositivo</th>
            <th>Autorização</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18/05/2024 11:24:32</td>
           <td>Fulano Oliveira</td>
            <td>Portaria Principal</td>
            <td>Catraca Esquerda (iDBlock)</td>
            <td className={styles.accessRequired}>Acesso requerido
            <a href="/" style={{textDecoration: "none"}}><span className={styles.iconCheck}>✔</span>{" "}</a>
            <a href="/" style={{textDecoration: "none"}}><span className={styles.iconCross}>✘</span></a></td>
          </tr>
          <tr>
            <td>18/05/2024 11:24:32</td>
            <td>Fulana Alves</td>
            <td>Portaria Principal</td>
            <td>Catraca Direita (iDBlock)</td>
            <td className={styles.accessGranted}>Acesso autorizado</td>
          </tr>
          <tr>
            <td>18/05/2024 11:24:32</td>
            <td>Fulano Roberto</td>
            <td>Portaria Principal</td>
            <td>Catraca Esquerda (iDBlock)</td>
            <td className={styles.accessDenied}>Acesso negado</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Monitoramento;
