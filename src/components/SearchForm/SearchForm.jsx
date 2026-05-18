import "./SearchForm.css";
import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      setHasError(true);
      return;
    }

    setHasError(false);
    onSearch(keyword);
  };
  return (
    <section className="search-form">
      <h1 className="search-form__title">¿Qué está pasando en el mundo?</h1>

      <p className="search-form__text">
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>

      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={
            hasError
              ? "Por favor, introduzca una palabra clave"
              : "Introduce un tema"
          }
          className="search-form__input"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setHasError(false);
          }}
        />

        <button type="submit" className="search-form__button">
          Buscar
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
