import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout.png";
import logoutIconLight from "../../images/logout-dark.png";

function Navigation({ isLoggedIn, currentUser, onLoginClick, isSavedNews }) {
  return (
    <nav className="header__nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `header__link ${isSavedNews ? "header__link_light" : ""} ${
            isActive
              ? isSavedNews
                ? "header__link_active_light"
                : "header__link_active"
              : ""
          }`
        }
      >
        Inicio
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/saved-news"
            className={({ isActive }) =>
              `header__link ${isSavedNews ? "header__link_light" : ""} ${
                isActive
                  ? isSavedNews
                    ? "header__link_active_light"
                    : "header__link_active"
                  : ""
              }`
            }
          >
            Artículos guardados
          </NavLink>
          <button
            className={`header__button header__button_user ${isSavedNews ? "header__button_light" : ""}`}
          >
            {currentUser.name}
            <img
              src={isSavedNews ? logoutIconLight : logoutIcon}
              alt="Logout"
              className="header__logout-icon"
            />
          </button>
        </>
      )}
      {!isLoggedIn && (
        <button
          className={`header__button header__button_login ${isSavedNews ? "header__button_light" : ""}`}
          onClick={onLoginClick}
        >
          Iniciar sesión
        </button>
      )}
    </nav>
  );
}

export default Navigation;
