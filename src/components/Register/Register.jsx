import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register({ isOpen, onClose, onRedirectClick }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");

  const isValid =
    email !== "" &&
    password !== "" &&
    username !== "" &&
    emailError === "" &&
    passwordError === "" &&
    usernameError === "";

  function handleEmailChange(e) {
    const newValue = e.target.value;
    setEmail(newValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(newValue)) {
      setEmailError("Dirección de correo electrónico no válida");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(e) {
    const newValue = e.target.value;
    setPassword(newValue);

    if (newValue.length < 1) {
      setPasswordError("Debe tener al menos 1 carácter");
    } else {
      setPasswordError("");
    }
  }

  function handleUsernameChange(e) {
    const newValue = e.target.value;
    setUsername(newValue);

    if (newValue.length < 2) {
      setUsernameError("El nombre de usuario debe tener al menos 2 caracteres");
    } else {
      setUsernameError("");
    }
  }

  return (
    <div>
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        title="Inscribirse"
        name="register"
        buttonText="Inscribirse"
        isValid={isValid}
        redirectText="iniciar sesión"
        onRedirectClick={onRedirectClick}
      >
        <label className="popup__label">
          Correo electrónico
          <input
            type="email"
            name="email"
            className="popup__input"
            placeholder="Correo electrónico"
            required
            onChange={handleEmailChange}
            value={email}
          />
          <span className="popup__error">{emailError}</span>
        </label>
        <label className="popup__label">
          Contraseña
          <input
            type="password"
            name="password"
            className="popup__input"
            placeholder="Contraseña"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="popup__error">{passwordError}</span>
        </label>
        <label className="popup__label">
          Nombre de usuario
          <input
            type="text"
            name="username"
            className="popup__input"
            placeholder="Nombre de usuario"
            required
            onChange={handleUsernameChange}
            value={username}
          />
          <span className="popup__error">{usernameError}</span>
        </label>
      </PopupWithForm>
    </div>
  );
}

export default Register;
