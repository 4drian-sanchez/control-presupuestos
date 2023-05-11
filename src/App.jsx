import { useState, useEffect } from "react"
import { Header, Modal, ListadoGastos } from "./components"
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  //Estados de la aplicacion
  const [presupuesto, setPresupuesto] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false)
  const [modalAnimar, setModalAnimar] = useState(false);
  const [guardarGastos, setguardarGastos] = useState([]);
  const [editarGastos, seteditarGastos] = useState({});

  const guardarGasto = (gasto) => {
    gasto.fecha = Date.now();
    setguardarGastos([...guardarGastos, gasto]);

    setModalAnimar(false);
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  //Efectos
  useEffect(() => {
    if (Object.keys(editarGastos).length) {
      setModal(true)
      setTimeout(() => {
        setModalAnimar(true);
      }, 300);
    }
    
  }, [editarGastos])

  const hundleMoodal = () => {
    setModal(true)
    seteditarGastos({})
    setTimeout(() => {
      setModalAnimar(true);
    }, 300);
  };




  return (

    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        guardarGastos={guardarGastos}
      />

      {(isValid) &&
        <main>
          <div
            className="nuevo-gasto"
            onClick={hundleMoodal}
          >
            <img src={iconoNuevoGasto} alt="Icono de nuevo gasto" />
          </div>

          <ListadoGastos
            guardarGastos={guardarGastos}
            seteditarGastos={seteditarGastos}
          />
        </main>
      }

      {
        (modal) &&
        <Modal
          setModal={setModal}
          modalAnimar={modalAnimar}
          setModalAnimar={setModalAnimar}
          guardarGasto={guardarGasto}
          editarGastos={editarGastos}
        />
      }
    </div>


  )
};

export default App;
