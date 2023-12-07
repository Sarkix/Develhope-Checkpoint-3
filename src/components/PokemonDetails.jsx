import React, { useState, useEffect } from "react";

const PokemonDetails = ({ pokemon }) => {
    return (
        <div>
            <h2>Pokemon Details</h2>
            <p>name: {pokemon.name}</p>
        </div>
    );
};

export default PokemonDetails;
