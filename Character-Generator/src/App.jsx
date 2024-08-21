import { useState } from 'react'
import './App.css'
import Options from './Options'


function App() {

  const [acc, setAcc] = useState("");
  const [ears, setEars] = useState("");
  const [eyes, setEyes] = useState("");
  const [hair, setHair] = useState("");
  const [mouth, setMouth] = useState("");
  const [nose, setNose] = useState("");

  return (
    <>
      <div>
        <Options
          setAcc={setAcc}
          setEars={setEars}
          setEyes={setEyes}
          setHair={setHair}
          setMouth={setMouth}
          setNose={setNose} />
      </div>
      <div className='Basic-character'>
        <img src="./basic-character.png" />
        {hair && <img src={hair} />}
        {eyes && <img src={eyes} />}
        {nose && <img src={nose} />}
        {mouth && <img src={mouth} />}
        {ears && <img src={ears} />}
        {acc && <img src={acc} />}
      </div>
    </>
  )
}

export default App
