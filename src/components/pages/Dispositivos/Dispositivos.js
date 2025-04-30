import styles from "./Dispositivos.module.css";
import catracaPlaceholder from "../../../img/catraca.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Dispositivos() {
  const [dispositivos, setDispositivos] = useState([]);
  const [statusDispositivos, setStatusDispositivos] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDispositivos = async () => {
      try {
        const responseDispositivos = await fetch(
          "http://localhost:3001/dispositivos"
        );
        if (!responseDispositivos.ok) {
          throw new Error(`HTTP error! status: ${responseDispositivos.status}`);
        }
        const dataDispositivos = await responseDispositivos.json();
        setDispositivos(dataDispositivos);

        const statusData = {};
        for (const dispositivo of dataDispositivos) {
          const responseStatus = await fetch(
            `http://localhost:3001/dispositivosStatus/${dispositivo.id}`
          );
          if (responseStatus.ok) {
            const dataStatus = await responseStatus.json();
            statusData[dispositivo.id] = dataStatus.status;
          } else {
            statusData[dispositivo.id] = "Indisponível";
          }
        }
        setStatusDispositivos(statusData);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchDispositivos();
  }, []);

  if (loading) {
    return <div className={styles.container}>Carregando dispositivos...</div>;
  }

  if (error) {
    return (
      <div className={styles.container}>
        Erro ao carregar dispositivos: {error}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dispositivos</h1>
      <div className={styles.cards}>
        {dispositivos.map((dispositivo) => (
          <div key={dispositivo.id} className={styles.cardContainer}>
            <h3 className={styles.cardTitle}>{dispositivo.nome}</h3>
            <h4 className={styles.cardModel}>Modelo: {dispositivo.modelo}</h4>
            <p className={styles.cardArea}>ID: {dispositivo.id}</p>
            {dispositivo.foto ? (
              <img src={dispositivo.foto} alt={dispositivo.nome} />
            ) : (
              <img src={catracaPlaceholder} alt="catraca placeholder" />
            )}
            <p>
              Status: {statusDispositivos[dispositivo.id] || "Carregando..."}
            </p>
            <p>
              Endereço: {dispositivo.endereço}:{dispositivo.porta}
            </p>
            <p>Usuário: {dispositivo.usuario}</p>
          </div>
        ))}

        <button
          onClick={() => {
            alert("Botão clicado");
          }}
          className={styles.iconButton}
        >
          <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />{" "}
          Adicionar dispositivo
        </button>
      </div>
    </div>
  );
}

export default Dispositivos;
