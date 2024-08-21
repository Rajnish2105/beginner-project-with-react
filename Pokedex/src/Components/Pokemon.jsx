import axios from "axios"
import { useEffect, useState } from "react";
import "./Pokemon.css"
import OnePokemon from "./OnePokemon";
import SearchBar from './SearchBar'

export default function Pokemon({ num = 5 }) {

    const [pokemons, setPokemons] = useState([])
    const [q, setQ] = useState([]);

    useEffect(() => {
        async function GetPokemons() {
            for (let i = 1; i < num; i++) {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const pokemon = {
                    name: res.data.name,
                    img: res.data.sprites.other['official-artwork'].front_default,
                    types: res.data.types.map(typeInfo => typeInfo.type.name)
                }
                setPokemons(pre => {
                    if (!pre.some(existing => existing.name === pokemon.name)) {
                        return [...pre, pokemon];
                    }
                    return pre;
                });
            }
        }
        GetPokemons()
    }, [])

    const sort = (query) => {
        if (query) {
            setQ(pokemons.filter(pok => pok.name.toLowerCase().startsWith(query.toLowerCase())));
        } else {
            setQ(pokemons);
        }
    };

    const result = q.length > 0 ? q : [...pokemons].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <>
            <SearchBar sort={sort} q={q} />
            <div className="Pokemon">
                {result.map((one, index) => (
                    <OnePokemon key={one.name} one={one} index={index} />
                ))}
            </div>
        </>
    )
}