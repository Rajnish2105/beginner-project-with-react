import './App.css'
import Pokemon from './Components/Pokemon'

function App() {

  return (
    <div className='App'>
      <nav><h1>Pokemon</h1></nav>
      <Pokemon num={20} />
    </div>
  )
}

export default App
