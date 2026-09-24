import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Componente from './components/Componente.jsx'
import Interprete from './components/Interprete.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>¡Hola, React!</h2>
        <Componente>
          <p>Cabeza que estamos en el 80</p>
        </Componente>
        <Interprete
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQOa8HHKyxqMBbZnC8uV_-7HRtYHis9chVSm9P2SuOA&s=10"
          nombre="Pepe">
          Descripcion
        </Interprete>
        <Interprete
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lkokYv_E7imvZ5CJfKn7CPPMGghB-JbOUxDFtS77Vg&s=10"
          nombre="Jose">
          Otra descripcion
        </Interprete>
      </div>
    </>
  )
}

export default App
