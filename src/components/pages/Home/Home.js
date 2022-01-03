import Footer from '../../organisms/Footer/Footer';
import Hero from '../../organisms/Hero/Hero';
import Navbar from '../../organisms/Navbar/Navbar';
import Movies from '../../organisms/Movies/Movies';

const Home = ({ error, movies, loading }) => {
  console.log('Home component data:', movies);
  return (
    <>
      <Navbar />
      <Hero />
      <Movies error={error} loading={loading} movies={movies}></Movies>
      <Footer />
    </>
  );
};

export default Home;
