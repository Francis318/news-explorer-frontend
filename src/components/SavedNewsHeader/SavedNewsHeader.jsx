import "./SavedNewsHeader.css";

function SavedNewsHeader({ currentUser, savedArticles }) {
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Artículos guardados</h2>
      <p className="saved-news-header__subtitle">
        {currentUser.name}, tienes {savedArticles.length} artículos guardados
      </p>
      <div className="saved-news-header__keywords-container">
        <p className="saved-news-header__keywords-title">Por palabras clave:</p>
        <ul className="saved-news-header__keywords">
          <li className="saved-news-header__keyword">Naturaleza</li>
          <li className="saved-news-header__keyword">Yellowstone</li>
          <li className="saved-news-header__keyword">y 2 más</li>
        </ul>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
