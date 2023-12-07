import React, { useState, useEffect } from "react";
import PokemonDetails from "./PokemonDetails";

const PokemonList = () => {
    const [list, setList] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState(null);

    useEffect(() => {
        const fetchPokemonList = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=10"
            );
            const data = await response.json();
            setList(data.results);
        };
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        // .then((res) => res.json())
        // .then((data) => setList(data.results))
        fetchPokemonList();
    }, []);

    const handlePokemonClick = (pokemon) => {
        setPokemonSelected(pokemon);
        console.log(pokemon);
    };

    return (
        <div>
            <ul>
                {list.map((pokemon) => (
                    <li key={pokemon.name}>
                        <span onClick={() => handlePokemonClick(pokemon)}>
                            {pokemon.name}
                        </span>
                    </li>
                ))}
            </ul>
            {pokemonSelected && <PokemonDetails pokemon={pokemonSelected} />}
        </div>
    );
};

export default PokemonList;
