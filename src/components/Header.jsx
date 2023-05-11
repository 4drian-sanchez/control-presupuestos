import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

export const Header = ( {
   presupuesto,
   setPresupuesto,
   isValid,
   setIsValid,
   guardarGastos,
   setguardarGastos
 } ) => {
  return (
    <header>
       

        { (isValid) 
          ?  <ControlPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={ setPresupuesto }
              guardarGastos={guardarGastos}
              setguardarGastos={setguardarGastos}
              setIsValid={setIsValid}
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