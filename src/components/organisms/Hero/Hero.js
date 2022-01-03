import './Hero.css';
import heroImage from '../../../images/hero.png';
import Button from '../../atoms/Button/Button';

const Hero = () => {
  return (
    <section className="section">
      <div className="hero">
        <img className="hero__background" alt="Hero" src={heroImage} />
        <div className="hero__body">
          <h1 className="hero-title">Wanna more content?</h1>
          <Button linkTo="/register">Get Access</Button>
        </div>
      </div>
      <div className="hero-divider"></div>
    </section>
  );
};

export default Hero;
