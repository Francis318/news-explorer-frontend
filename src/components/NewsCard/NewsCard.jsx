import save from "../../images/Save.png";

function NewsCard({ title, description, imageUrl, author, date }) {
  return (
    <div className="news-card">
      <button className="news-card__save-button">
        <img src={save} alt="Guardar" />
      </button>
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
