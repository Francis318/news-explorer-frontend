import "./Navigation.css";

function Navigation({ onLoginClick }) {
  return (
    <nav className="header__nav">
      <button className="header__button header__button__home header__button_active">
        Inicio
      </button>
      <button className="header__button" onClick={onLoginClick}>
        Iniciar sesión
      </button>
    </nav>
  );
}

export default Navigation;
