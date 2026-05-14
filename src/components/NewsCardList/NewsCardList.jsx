import NewsCard from "../NewsCard/NewsCard";
import React, { useState, useEffect } from "react";
import "./NewsCardList.css";

function NewsCardList({ cards }) {
  const [visibleCards, setVisibleCards] = useState(3);
  const showMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  useEffect(() => {
    setVisibleCards(3);
  }, [cards]);

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Resultados de la búsqueda</h2>
      <div className="news-card-list__container">
        {cards.slice(0, visibleCards).map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            author={item.author}
            date={item.date}
          />
        ))}
      </div>
      {visibleCards < cards.length && (
        <button className="news-card-list__show-more" onClick={showMore}>
          Ver más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
