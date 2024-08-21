import { useState } from "react"
import "./Options.css"

export default function Options({ setAcc, setEyes, setHair, setEars, setMouth, setNose }) {

    const [showOP, setShowOP] = useState("Accessories");

    const generateImagePaths = (category, count) => {
        const basePath = `./images/${category}/${category}`;
        return Array.from({ length: count }, (_, i) => `${basePath}-${i + 1}.png`);
    }

    const array = {
        Accessories: generateImagePaths('accessory', 5),
        Ears: generateImagePaths('ear', 5),
        Eyes: generateImagePaths('eye', 6),
        Hair: generateImagePaths('hair', 6),
        Mouth: generateImagePaths('mouth', 6),
        Nose: generateImagePaths('nose', 6)
    }

    return (
        <div className="Options" >
            <div>
                <h1>Options</h1>
                <button onClick={() => setShowOP("Hair")}>Hair</button>
                <button onClick={() => setShowOP("Eyes")}>Eyes</button>
                <button onClick={() => setShowOP("Mouth")}>Mouth</button>
                <button onClick={() => setShowOP("Nose")}>Nose</button>
                <button onClick={() => setShowOP("Ears")}>Ears</button>
                <button onClick={() => setShowOP("Accessories")}>Accessories</button>
            </div>

            <div>
                <h3>{showOP}</h3>
                {array[showOP]?.map((value, index) => {
                    const setFunction = {
                        Accessories: setAcc,
                        Ears: setEars,
                        Eyes: setEyes,
                        Hair: setHair,
                        Mouth: setMouth,
                        Nose: setNose
                    }[showOP];

                    return setFunction ? (
                        <img key={index} src={value} onClick={() => setFunction(value)} />
                      ) : null;
                })}
            </div>

        </div>
    )
}