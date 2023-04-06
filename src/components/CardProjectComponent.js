import React from "react";

const CardProjectComponent = ({id, name, img, description, url}) => {
  return (
      <div className="col-6">
        <a className="text-decoration-none" target="_blank" href={url}>
      <div className="card m-1" key={id}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
      </a>
      </div>
  );
};

export default CardProjectComponent;
