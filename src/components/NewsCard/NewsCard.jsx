import save from "../../images/Save.png";
import saveHover from "../../images/save-hover.png";
import saveLogin from "../../images/save-login.png";
import "./NewsCard.css";
import React, { useState, useEffect } from "react";
import deleteLigth from "../../images/delete-ligth.png";
import deleteDark from "../../images/delete-dark.png";

function NewsCard({
  title,
  description,
  imageUrl,
  author,
  date,
  isLoggedIn,
  keyword,
  isSavedNews,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    if (isSavedNews) {
      console.log("Aquí borraremos el artículo después");
    } else if (isLoggedIn) {
      setIsSaved(!isSaved);
    }
  };

  let actionIcon;
  if (isSavedNews) {
    actionIcon = isHovered ? deleteDark : deleteLigth;
  } else {
    actionIcon = isSaved ? saveLogin : isHovered ? saveHover : save;
  }

  let tooltipText = "";
  if (isSavedNews) {
    tooltipText = "Eliminar de guardados";
  } else if (!isLoggedIn) {
    tooltipText = "Inicia sesión para guardar artículos";
  }

  return (
    <div className="news-card">
      {isSavedNews && <div className="news-card__keyword">{keyword}</div>}

      <div className="news-card__button-container">
        {tooltipText && (
          <span className="news-card__tooltip">{tooltipText}</span>
        )}
        <button
          className="news-card__save-button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleSaveClick}
        >
          <img src={actionIcon} alt={isSavedNews ? "Eliminar" : "Guardar"} />
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
