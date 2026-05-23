import "./SavedNewsHeader.css";

function SavedNewsHeader({ currentUser, savedArticles }) {
  const name = currentUser?.name || "Usuario";
  const getSortedKeywords = () => {
    if (!savedArticles || savedArticles.length === 0) return [];

    const keywordCounts = savedArticles.reduce((acc, article) => {
      acc[article.keyword] = (acc[article.keyword] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(keywordCounts).sort(
      (a, b) => keywordCounts[b] - keywordCounts[a],
    );
  };

  const keywords = getSortedKeywords();

  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">Artículos guardados</h2>
      <p className="saved-news-header__subtitle">
        {name}, tienes {savedArticles.length} artículos guardados
      </p>
      {keywords.length > 0 && (
        <div className="saved-news-header__keywords-container">
          <p className="saved-news-header__keywords-title">
            Por palabras clave:
          </p>
          <ul className="saved-news-header__keywords">
            {keywords.slice(0, 3).map((keyword, index) => (
              <li key={index} className="saved-news-header__keyword">
                {index === 2 && keywords.length > 3
                  ? `y ${keywords.length - 2} más`
                  : keyword}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default SavedNewsHeader;
