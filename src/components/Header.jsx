import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ( { presupuesto, setPresupuesto, isValid, setIsValid } ) => {
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

export default Header;