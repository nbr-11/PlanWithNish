import { useState } from "react";

function Card(props) {
  console.log(props);
  const { id, image, info, price, cityName, removeHandler } = props;
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  console.log(image);

  return (
    <div className="card">
      <img src={image} className="image" width="400" height="250"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">{price}</h4>
          <h4 className="tour-name">{cityName}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readMoreHandler}>
            {readMore ? "Show less" : "Read More"}
          </span>
        </div>
      </div>

      <button
        className="btn-red"
        onClick={() => {
          removeHandler(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Card;
