import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

export const Header = ( { presupuesto, setPresupuesto, isValid, setIsValid, guardarGastos } ) => {
  return (
    <header>
       

        { (isValid) 
          ?  <ControlPresupuesto
              presupuesto={presupuesto}
              guardarGastos={guardarGastos}
            />
          : (
            <NuevoPresupuesto
              presupuesto={ presupuesto }
              setPresupuesto={ setPresupuesto }
              setIsValid= { setIsValid }
            />
          )
        }
        
    </header>
  )
}