import styles from "../css/Footer.module.css";
import Whats from "../assets/whats.png";
import Face from "../assets/face.png";
import Insta from "../assets/insta.png";

function Footer() {
  return (
    <footer>
      <div className={styles.container_footer}>
        <p>Nossa loja - Instrumentos musicais</p>
        <p>
          Rua tito 54 - Lapa <br />
          São Paulo - Brasil
        </p>
        <div className={styles.img_footer}>
          <img src={Whats} alt="" />
          <img src={Face} alt="" />
          <img src={Insta} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;