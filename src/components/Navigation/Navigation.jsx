import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../images/logout.png";
import logoutIconLight from "../../images/logout-dark.png";
import menuIcon from "../../images/menu.png";
import menuIconLight from "../../images/menu-dark.png";
import closeIcon from "../../images/close-icon.png";

function Navigation({ isLoggedIn, currentUser, onLoginClick, isSavedNews }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="header__menu-btn" onClick={toggleMenu}>
        <img
          src={isMenuOpen ? closeIcon : isSavedNews ? menuIconLight : menuIcon}
          alt="Menú"
          className="header__menu-icon"
        />
      </button>

      <nav className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
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
              onClick={() => setIsMenuOpen(false)}
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
    </>
  );
}

export default Navigation;
