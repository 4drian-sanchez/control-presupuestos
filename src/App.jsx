import { useState } from "react"
import {Header, Modal} from "./components"
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  //State del presupuesto
  const [presupuesto, setPresupuesto] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false)

  const hundleMoodal = () => setModal(true);

  return (

    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      { ( isValid ) &&
        <div 
          className="nuevo-gasto"
          onClick={ hundleMoodal }
          >
          <img src={iconoNuevoGasto} alt="Icono de nuevo gasto" />
        </div>
      }

      {
        (modal) && <Modal setModal={setModal}/>
      }
    </>


  )
};

export default App;
