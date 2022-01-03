import './Button.css';

const Button = ({ type = 'submit', children, onClick }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;
