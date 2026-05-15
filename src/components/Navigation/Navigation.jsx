import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout.png";

function Navigation({ isLoggedIn, currentUser, onLoginClick }) {
  return (
    <nav className="header__nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `header__link ${isActive ? "header__link_active" : ""}`
        }
      >
        Inicio
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              `header__link ${isActive ? "header__link_active" : ""}`
            }
          >
            Artículos guardados
          </NavLink>
          <button className="header__button header__button_user">
            {currentUser.name}
            <img
              src={logoutIcon}
              alt="Logout"
              className="header__button__logout-icon"
            />
          </button>
        </>
      )}
      {!isLoggedIn && (
        <button
          className="header__button header__button_login"
          onClick={onLoginClick}
        >
          Iniciar sesión
        </button>
      )}
    </nav>
  );
}

export default Navigation;
