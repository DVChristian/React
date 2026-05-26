import styles from "../css/Forms.module.css";
import Whats from "../assets/whats.png";
import Face from "../assets/face.png";
import Insta from "../assets/insta.png";

function Forms() {
  return (
     <section className={styles.section}>
      <div className={styles.formulario}>
        <label for="text">Entre com o seu nome:</label>
        <input type="text" placeholder="Digite seu nome" />
        <label for="text">Entre com o seu email:</label>
        <input type="text" placeholder="Digite seu email" />
        <label for="text"></label>
        <input
          className={styles.pedido}
          type="text"
          placeholder="faça seu pedido por aqui"
        />
        <button>Enviar</button>
      </div>
      <div className={styles.section_img}>
        <p>Acesse também nossas redes sociais</p>
        <div class={styles.container_img}>
          <img src={Whats} alt="" />
          <img src={Face} alt="" />
          <img src={Insta} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Forms;