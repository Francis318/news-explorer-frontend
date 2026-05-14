import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <h1 className="header__title">News Explorer</h1>
      <Navigation onLoginClick={onLoginClick} />
    </header>
  );
}

export default Header;
