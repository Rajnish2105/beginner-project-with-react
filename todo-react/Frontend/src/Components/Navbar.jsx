import "./Navbar.css"
import Light from "../assets/Lightmode.svg"
import { useState } from "react"

export default function Navbar() {

    const [white, setWhite] = useState(true)

    const toggleShade = () => {
        setWhite(!white)
        document.body.style.backgroundColor = white ? 'hsl(235deg 20.69% 11.37%)' : 'white';
        document.body.style.color = white ? 'white' : 'black';
    }

    return (
        <div className="Navbar">
            <h1>Todos</h1>
            <img onClick={toggleShade} style={white ? { filter: 'invert(1) sepia(1) saturate(5) hue-rotate(180deg)' } : {}}
                src={Light} />
        </div>
    )
}