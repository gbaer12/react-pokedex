
import "./Pokecard.css";

const Poke_API = "https://raw.githubusercontent.com/" +
"PokeAPI/sprites/master/sprites/pokemon/";

/** Individual Pokemon card.
 * 
 * Props:
 * -title
 * -image
 * -type
 * -exp: (number of experience points)
 * 
 */

function Pokecard({ exp, id, name, type }) {
    const imgSrc = `${Poke_API}${id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{name}</div>
            <img className="Pokecard-image" src={imgSrc} alt={name} />
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">EXP: {exp}</div>
        </div>
    );
}

export default Pokecard;