import "./NotFound.css";
import notFoundIcon from "../../images/not-found_v1.png";

function NotFound() {
  return (
    <div className="not-found">
      <img src={notFoundIcon} alt="Not Found" className="not-found__icon" />
      <h2 className="not-found__title">No se encontró nada</h2>
      <p className="not-found__message">
        Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda.
      </p>
    </div>
  );
}

export default NotFound;
