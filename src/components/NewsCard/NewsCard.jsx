import save from "../../images/Save.png";
import saveHover from "../../images/save-hover.png";
import saveLogin from "../../images/save-login.png";
import "./NewsCard.css";
import React, { useState, useEffect } from "react";

function NewsCard({ title, description, imageUrl, author, date, isLoggedIn }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    if (isLoggedIn) {
      setIsSaved(!isSaved);
    }
  };

  let saveIcon = save;
  if (isSaved) {
    saveIcon = saveLogin;
  } else if (isHovered) {
    saveIcon = saveHover;
  }

  return (
    <div className="news-card">
      <div className="news-card__button-container">
        {!isLoggedIn && (
          <span className="news-card__tooltip">
            Inicia sesión para guardar artículos
          </span>
        )}
        <button
          className="news-card__save-button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleSaveClick}
        >
          <img src={saveIcon} alt="Guardar" />
        </button>
      </div>
      <img src={imageUrl} alt={title} className="news-card__image" />
      <div className="news-card__content">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__author">{author}</p>
      </div>
    </div>
  );
}

export default NewsCard;
