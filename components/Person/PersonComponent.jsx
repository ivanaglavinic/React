import "./person.css";

export const PersonComponent = () => {
  const name = "Alice";
  const age = 25;

  return (
    <div className="person-container">
      <p>{age >= 18 ? `${name} is an adult` : `${name} is a minor`}</p>
    </div>
  );
};
