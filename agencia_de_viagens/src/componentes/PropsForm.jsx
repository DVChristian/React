import styles from "../css/PropsForm.module.css"


function PropsForm() {
  return (
    <div className={styles.props_form}>
      <form action="">
        <h3>Compre agora sua passagem!</h3>
        <input type="text" placeholder= "Digite seu nome" />
        <input type="email" placeholder= "Digite seu email" />
        <input type="text" placeholder= "Digite seu contato" />
      </form>
      <button>Enviar</button>
    </div>
  );
}

export default PropsForm;