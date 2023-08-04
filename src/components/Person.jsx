import "./Card.css";

const Person = (props) => {
  console.log(props);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        minWidth: 300,
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
      }}
    >
      <img
        style={{ height: 200, width: 200, objectFit: "cover" }}
        src={props.imageUrl}
      />
      <div className="data-box">
        <p className="title">name:</p>
        <p className="value"> {props.name}</p>
      </div>
      <div className="data-box">
        <p className="title">age:</p>
        <p className="value"> {props.age}</p>
      </div>
    </div>
  );
};

export default Person;
