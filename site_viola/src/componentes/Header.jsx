import styles from "../css/Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="/">Quem somos</a></li>
        <li><a href="/">Instrumentos</a></li>
        <li><a href="/">Endereço</a></li>
        <li><a href="/">Contato</a></li>
      </nav>
    </header>
  );
}

export default Header;