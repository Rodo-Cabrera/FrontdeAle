import React from "react";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const { icon, tittle, id, price } = props.prod;
  const navigate = useNavigate();
  return (
    <div className="card mx-2 my-2 col-3 g-0 shadow">
      <img src={ icon } className="card-img-top" alt={tittle} />
      <div className="card-body d-flex justify-content-between flex-column">
        <h3 className="card-title">{ tittle }</h3> 
        <div className="text-center">
        <button className="btn btn-primary" onClick={() => navigate(`/prod/${id}`)}>
            Comprar ${ price }
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
