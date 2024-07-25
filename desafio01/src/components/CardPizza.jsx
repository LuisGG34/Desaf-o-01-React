import React from "react";

const CardPizza = ({ name, price, img, ingredientes }) => {
    return (
        <>
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <h5 className="card-title">Ingredientes</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{ingredientes.join(', ')}</li>
                <li className="list-group-item">Precio: ${price}</li>
            </ul>
            <button className="btn btn-secondary">Ver Mas</button>
            <button className="btn btn-dark">Añadir</button>
        </div>
        </>
    );
};

export default CardPizza;

