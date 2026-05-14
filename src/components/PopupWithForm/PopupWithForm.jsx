import React from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  buttonText,
  children,
  isValid,
}) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`popup-${name}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
          aria-label="Cerrar"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={name}
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          {children}
          <button type="submit" className="popup__submit" disabled={!isValid}>
            {buttonText}
          </button>
        </form>
        <p className="popup__redirect">
          o
          <a href="#" className="popup__redirect-link">
            inscribirse
          </a>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;
