import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <h1 className="search-form__title">¿Qué está pasando en el mundo?</h1>

      <p className="search-form__text">
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>

      <form className="search-form__form">
        <input
          type="text"
          placeholder="Introduce un tema"
          className="search-form__input"
        />

        <button type="submit" className="search-form__button">
          Buscar
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
