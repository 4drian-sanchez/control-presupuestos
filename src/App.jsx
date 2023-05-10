import { useState } from "react"
import Header from "./components/Header"

function App() {

  //State del presupuesto
  const [presupuesto, setPresupuesto] = useState('');
  const [isValid, setIsValid] = useState(false);

  return (
    <Header
      presupuesto={ presupuesto }
      setPresupuesto={ setPresupuesto }
      isValid={ isValid }
      setIsValid={ setIsValid }
    />
  )
}
export default App
