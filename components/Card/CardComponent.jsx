import "./card.css";

export const CardComponent = () => {
  const returnString = "This is a card component";
  return (
    <div className="card-container">
      <h2>Card Title</h2>
      <p>{returnString}</p>
    </div>
  );
};
