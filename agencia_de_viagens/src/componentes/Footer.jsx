import Style from "../css/Footer.module.css";
import Imagem1 from "../assets/imagens/insta.jpeg";
import Imagem2 from "../assets/imagens/face.jpeg";
import Imagem3 from "../assets/imagens/tiktok.jpeg";
import Imagem4 from "../assets/imagens/whtas.jpeg";

function Footer() {
  return (
    <footer>
      <div className={Style.container}>
        <h2>Siga-nos em nossas redes sociais</h2>

        <div className={Style.container_images}>
          <img src={Imagem1} alt="Facebook" />
          <img src={Imagem2} alt="Facebook" />
          <img src={Imagem3} alt="Facebook" />
          <img src={Imagem4} alt="Facebook" />
        </div>

        <h4>Telefone de contato: 11940028922</h4>
      </div>
    </footer>
  );
}

export default Footer;