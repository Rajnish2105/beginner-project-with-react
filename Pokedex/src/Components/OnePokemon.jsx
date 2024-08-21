export default function OnePokemon({ one, index }) {

    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const typeColors = {
        grass: "green",
        water: "LightBlue",
        fire: "Orange",
        bug: "ForestGreen",
        normal: "#C0ffCf",
        poison: "Purple",
        fairy: "Plum",
        electric: "#F7F700",
        ground: "#F4A460"
    };

    const backgroundColor = typeColors[one.types[0]];

    return (
        <div style={{ backgroundColor }}>
            <img src={one.img} />
            <h1>#{index + 1} {cap(one.name)}</h1>
            {one.types.map((type, idx) => {
                return (<span key={idx}>{type}</span>)
            })}
        </div>
    )
}