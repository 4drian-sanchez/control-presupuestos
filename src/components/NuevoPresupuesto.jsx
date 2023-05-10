import { useState } from 'react';
import Alerta from './Alerta';

const NuevoPresupuesto = ( { 
    presupuesto,
    setPresupuesto,
    setIsValid } ) => {

  const [mensaje, setMensaje] = useState('');

  const hundleChange = ({ target:{ value } }) => {
    setPresupuesto(value);
    
    if(Number(presupuesto) < 1) {
      setMensaje('');
    }
  }
  
  const hundlePresupuesto = e => {
    e.preventDefault();

    if(Number(presupuesto) <= 0) {
      setMensaje('El valor debe ser mayor a cero');
      return;
    }
    
    setMensaje('');
    setIsValid(true);
  } 
  
  return (
    <div className="contenedor-presupuesto contenedor sombra">

        <form 
          className="formulario"
          onSubmit={hundlePresupuesto}
          noValidate
          >
            <div className="campo">
                <label htmlFor="presupuesto">Definir presupuesto</label>
                <input 
                    type="number"
                    className="nuevo-presupuesto"
                    placeholder="0"
                    min={0}
                    id="presupuesto"
                    value={ presupuesto }
                    onChange={ hundleChange }
                />
            </div>
            <input type="submit" value={'Añadir'} />

            { (mensaje) && <Alerta tipo={'error'}> { mensaje } </Alerta> }
        </form>
    </div>

  )
}

export default NuevoPresupuesto