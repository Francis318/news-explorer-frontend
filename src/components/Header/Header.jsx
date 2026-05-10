import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">News Explorer</h1>
      <nav className="header__nav">
        <button className="header__button">Inicio</button>
        <button className="header__button">Iniciar sesión</button>
      </nav>
    </header>
  );
}

export default Header;
