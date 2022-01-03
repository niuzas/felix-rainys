import './Card.css';
import FavoriteButton from '../../atoms/FavoriteButton/FavoriteButton';

const Card = ({ movieId, title, description, image }) => {
  return (
    <div className="movie-card">
      <img className="movie-card__image" src={image} alt={`${title} poster`} />
      <div className="movie-card__content">
        <div>
          <h2 className="movie-title">{title}</h2>
          <p className="movie-description">{description}...</p>
        </div>
        <div className="movie-favorite-button">
          <FavoriteButton movieId={movieId}>Favorite</FavoriteButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
