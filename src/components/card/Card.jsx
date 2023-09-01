import "./Card.css";

const Card = ({ header, text, icon }) => {
  return (
    <div className="card">
      <div>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>

      <div className="card_icon">
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Card;
