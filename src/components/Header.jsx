import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

export const Header = ( { presupuesto, setPresupuesto, isValid, setIsValid } ) => {
  return (
    <header>
       

        { (isValid) 
          ?  <ControlPresupuesto
              presupuesto={presupuesto}
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