import React, { useEffect } from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  buttonText,
  children,
  isValid,
  onRedirectClick,
  redirectText,
  onSubmit,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      id={`popup-${name}`}
      onMouseDown={handleOverlayClick}
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
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="popup__submit" disabled={!isValid}>
            {buttonText}
          </button>
        </form>
        <p className="popup__redirect">
          {"o "}
          <a
            href="#"
            className="popup__redirect-link"
            onClick={onRedirectClick}
          >
            {redirectText}
          </a>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;
