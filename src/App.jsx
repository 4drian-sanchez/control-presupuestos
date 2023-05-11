import { useState, useEffect } from "react"
import { generarId } from './helpers';
import { Header, Modal, ListadoGastos } from "./components"
import iconoNuevoGasto from './img/nuevo-gasto.svg'
import { Filtro } from "./components/Filtro";

function App() {

  //Estados de la aplicacion
  const [presupuesto, setPresupuesto] = useState( localStorage.getItem('presupuesto') ?? '' );
  const [guardarGastos, setguardarGastos] = useState( JSON.parse(localStorage.getItem('gastos')) ?? []);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false)
  const [modalAnimar, setModalAnimar] = useState(false);
  const [editarGastos, seteditarGastos] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  
  const guardarGasto = (gasto) => {

    if (gasto.id) {
      const gastoActualizado = guardarGastos.map(gastoState => (gastoState.id === gasto.id) ? gasto : gastoState);
      setguardarGastos(gastoActualizado);
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setguardarGastos([...guardarGastos, gasto]);
    }

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


  const eliminarGasto = id => {
    const GastosActualizados = guardarGastos.filter( gastosState => gastosState.id !== id);
    setguardarGastos(GastosActualizados);
  }

  
    //Agregar presupuesto al localStorage
    useEffect(() => {
      localStorage.setItem('presupuesto', presupuesto);
    }, [presupuesto])
  
    useEffect(() => {
      if(Number(presupuesto) > 0) {
        setIsValid(true);
      }
    }, [])
    
    //Agregar los gastos al localStorage
    useEffect(() => {
      localStorage.setItem('gastos', JSON.stringify(guardarGastos));
    }, [guardarGastos])
    
    //Filtrando gastos segun la categoría
    useEffect(() => {
      const gastoFiltrado = guardarGastos.filter( gastoState => gastoState.categoria === filtro );
      setGastosFiltrados(gastoFiltrado);
    }, [filtro])
    
  return (

    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        guardarGastos={guardarGastos}
        setguardarGastos={setguardarGastos}
      />

      {(isValid) &&
        <main>

        <Filtro
        filtro={filtro}
        setFiltro= {setFiltro}
        />
          
          <div
            className="nuevo-gasto"
            onClick={hundleMoodal}
          >
            <img src={iconoNuevoGasto} alt="Icono de nuevo gasto" />
          </div>

          <ListadoGastos
            guardarGastos={guardarGastos}
            seteditarGastos={seteditarGastos}
            eliminarGasto={eliminarGasto}
            gastosFiltrados={gastosFiltrados}
            filtro={filtro}
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
          seteditarGastos={seteditarGastos}
        />
      }
    </div>


  )
};

export default App;
