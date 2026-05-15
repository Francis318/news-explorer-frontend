import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, currentUser, onLoginClick }) {
  return (
    <header className="header">
      <h1 className="header__title">News Explorer</h1>
      <Navigation
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={onLoginClick}
      />
    </header>
  );
}

export default Header;
