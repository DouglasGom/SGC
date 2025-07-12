import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Formulario.module.css";

function Formulario() {
  const { tipo, id } = useParams();
  const [pessoa, setPessoa] = useState(null);
  const [fotoUrl, setFotoUrl] = useState(null);

  useEffect(() => {
    // Buscar dados da pessoa
    fetch(`http://localhost:3000/pessoas/${id}`)
      .then((res) => res.json())
      .then((data) => setPessoa(data));

    // Buscar URL da foto
    fetch(`http://localhost:3000/pessoas/url/${id}`)
      .then((res) => res.json())
      .then((data) => setFotoUrl(data.url));
  }, [id]);

  if (!pessoa) return <p className={styles.loading}>Carregando dados...</p>;

  return (
    <div className={styles.cadastroContainer}>
      <aside className={styles.fotoSection}>
        <h3 className={styles.subtitle}>Foto</h3>
        {fotoUrl ? (
          <img src={fotoUrl} alt="Foto de perfil" className={styles.fotoPreview} />
        ) : (
          <p>Carregando foto...</p>
        )}
        <div className={styles.btnGroup}>
          <button>Selecionar arquivo</button>
          <button>Tirar foto</button>
        </div>

        <h3 className={styles.subtitle}>Documento RG</h3>
        <img src={`/img/rg.png`} alt="RG" className={styles.fotoPreview} />
        <div className={styles.btnGroup}>
          <button>Selecionar arquivo</button>
          <button>Tirar foto</button>
        </div>
      </aside>

      <section className={styles.dadosSection}>
        <div className={styles.header}>
          <h2>Informações</h2>
          <button className={styles.exportar}>Exportar</button>
          <button className={styles.exportar}>Editar</button>
        </div>

        <form className={styles.dadosForm}>
          <div className={styles.inputGroup}>
            <label>Nome</label>
            <input readOnly type="text" defaultValue={pessoa.nome} />
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Matrícula (RM)</label>
              <input readOnly type="text" defaultValue={pessoa.rm || ""} />
            </div>
            <div className={styles.inputGroup}>
              <label>ID</label>
              <input readOnly type="text" defaultValue={pessoa.id} />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Email institucional</label>
              <input readOnly type="email" defaultValue={pessoa.email} />
            </div>
            <div className={styles.inputGroup}>
              <label>Email do responsável</label>
              <input readOnly type="email" defaultValue={pessoa.email_responsavel || ""} />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup}>
              <label>Telefone</label>
              <input readOnly type="text" defaultValue={pessoa.telefone} />
            </div>
            <div className={styles.inputGroup}>
              <label>Telefone do responsável</label>
              <input readOnly type="text" defaultValue={pessoa.telefone_responsavel || ""} />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Observações</label>
            <textarea readOnly className={styles.message} rows="4" defaultValue={pessoa.observacoes || ""} />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Formulario;
