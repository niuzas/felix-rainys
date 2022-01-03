import './Footer.css';
import cards from '../../../images/cards.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>We care about your entertainment. Copyright © 2019–2022 felix.com</p>
      </div>
      <div className="footer-right">
        <img src={cards} alt="cards" />
      </div>
    </footer>
  );
};

export default Footer;
