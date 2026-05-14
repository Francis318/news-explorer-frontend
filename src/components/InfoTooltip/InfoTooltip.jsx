import React from "react";
import "../PopupWithForm/PopupWithForm.css";

function InfoTooltip({ isOpen, onClose, onLoginClick }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
          aria-label="Cerrar"
        ></button>
        <h2 className="popup__title" style={{ marginBottom: "15px" }}>
          ¡El registro se ha completado con éxito!
        </h2>
        <p
          className="popup__redirect"
          style={{ textAlign: "left", marginTop: "0" }}
        >
          <a href="#" className="popup__redirect-link" onClick={onLoginClick}>
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
