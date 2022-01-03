import Button from '../../atoms/Button/Button';
import Card from '../../molecules/Card/Card';
import './Movies.css';

const Movies = ({ error, loading, movies }) => {
  console.log('Movies component data:', movies);
  return (
    <section className="movies">
      {error && <h3 className="movies-error">{error}</h3>}
      {loading && !error && <h3 className="movies-loading">Loading movies...</h3>}
      {movies && !error && (
        <>
          <div className="movies-container">
            {movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  title={movie.title}
                  description={movie.description.substring(0, 55)}
                  image={movie.image}
                  movieId={movie.id}
                />
              );
            })}
          </div>
          <Button>Get More Content</Button>
        </>
      )}
    </section>
  );
};

export default Movies;
