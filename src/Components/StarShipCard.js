import React from "react";

function StarShipCard({ starship }) {
    const { name, model, manufacturer, passenger, crew, cargo_capacity } = starship;

    return (
        <div className="starship-card">
            <h2>{name}</h2>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Passengers: {passenger}</p>
            <p>Crew: {crew}</p>
            <p>Cargo Capacity: {cargo_capacity}</p>
        </div>

    )
}

export default StarShipCard;