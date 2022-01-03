import { useState } from 'react';
import './FavoriteButton.css';

const FavoriteButton = ({ movieId }) => {
  const [isFavorite, setisFavorite] = useState(false);
  const favFunction = (event) => {
    console.log('favFunction ID:', movieId);
    setisFavorite(!isFavorite);
    event.target.classList.toggle('favorited');
  };

  return (
    <button className="favorite-button" onClick={favFunction}>
      {isFavorite ? 'Remove 💔' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
