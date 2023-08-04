import "./Card.css";
// rafce
const Card = (props) => {
  const { title, description, img, link, children } = props;

  console.log(children);

  return (
    <div className="sub-div">
      <h2
        style={{
          color: "red",
        }}
      >
        {title}
      </h2>
      <img
        src={img}
        style={{
          height: 100,
          width: 100,
        }}
        alt="insta logo"
      />
      <br />
      <a href={link}>Visit site</a>

      <p>{description}</p>

      {children}
    </div>
  );
};

export default Card;
