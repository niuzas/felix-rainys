import './Navbar.css';
import Button from '../../atoms/Button/Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="navbar-logo">F</p>
      </div>
      <div className="navbar-right">
        <Button>Sign In</Button>
      </div>
    </nav>
  );
};

export default Navbar;
