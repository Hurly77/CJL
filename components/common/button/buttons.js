export const InfoButton = ({ name, func = null }) => {
  if (func !== "null") {
    return (
      <button className="flex btn btn-primary" onClick={func}>
        {name}
      </button>
    );
  }
  return <button className="flex btn btn-primary">{name}</button>;
};

export default InfoButton;
