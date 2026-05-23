import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

function Header({ isLoggedIn, currentUser, onLoginClick, onLogOut }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNews ? "header_light" : ""}`}>
      <h1
        className={`header__title ${isSavedNews ? "header__title_light" : ""}`}
      >
        News Explorer
      </h1>
      <Navigation
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={onLoginClick}
        onLogOut={onLogOut}
        isSavedNews={isSavedNews}
      />
    </header>
  );
}

export default Header;
