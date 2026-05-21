import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onRedirectClick, onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const isValid =
    email !== "" &&
    password !== "" &&
    emailError === "" &&
    passwordError === "";

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

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <div>
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        title="Iniciar sesión"
        name="login"
        buttonText="Iniciar sesión"
        isValid={isValid}
        onRedirectClick={onRedirectClick}
        redirectText="inscribirse"
        onSubmit={handleSubmit}
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
      </PopupWithForm>
    </div>
  );
}

export default Login;
