import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import Alerta from './Alerta';
import { generarId } from '../helpers';
import cerrarModal from '../img/cerrar.svg'

export const Modal = ( { 
  setModal,
   modalAnimar,
   setModalAnimar,
   guardarGasto,
   editarGastos
   } ) => {

  const [mensaje, setMensaje] = useState('');
    
  //UseForm
    const {
      formState,
      setFormState,
      nombreGasto,
      hundleChange,
      cantidadGasto,
      categoria
    } = useForm({
      nombreGasto: '',
      cantidadGasto: '',
      categoria: ''
    });
  
    const hundleMoodal = () => {
      setModalAnimar(false);

      setTimeout( () => {
        setModal(false)
      }, 500)
    }

    //Effect
    useEffect(() => {    
      if(Object.keys(editarGastos).length) {
        console.log(editarGastos)
        setFormState({
          nombreGasto: editarGastos.nombreGasto,
          cantidadGasto: editarGastos.cantidadGasto,
          categoria: editarGastos.categoria
        })
      }
    }, [editarGastos])
    

    const hundleGastos = e => {
      e.preventDefault();

      if( Object.values(formState).includes('')) {
        setMensaje('Todos los campos son obligatorios');

        setTimeout(() => {
          setMensaje('')
        }, 3000);
        return
      }
      const gasto = { nombreGasto, cantidadGasto, categoria, id: generarId() };
      guardarGasto(gasto);
    }
  return (
    <div className="modal">
        <div  
            className="cerrar-modal"
            onClick={ hundleMoodal }
            >
            <img src={ cerrarModal } alt="Cerrar el modal" />
        </div>

        <form 
          className={`formulario ${ modalAnimar ? 'animar' : 'cerrar' }` }
          onSubmit={ hundleGastos }
          autoComplete="off"
          >
          <legend>Nuevo gasto</legend>
          { (mensaje) && <Alerta tipo={'error'}> {mensaje} </Alerta>}
          <div className="campo">
            <label htmlFor="gasto">Nombre del gasto</label>
            <input 
              type="text"
              id='gasto'
              placeholder='Ingrese el nombre de tu gasato'
              onChange={hundleChange}
              value={nombreGasto}
              name='nombreGasto'
              
            />
          </div>

          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input 
              type="number"
              id='cantidad'
              placeholder='Coloque la cantidad del gasto'
              name='cantidadGasto'
              onChange={hundleChange}
              value={cantidadGasto}
              
            />
          </div>

          <div className="campo">
            <label htmlFor="categorias">Categorías</label>
            
            <select id="categorias" 
                    onChange={hundleChange}
                    value={categoria}
                    name='categoria'
                    >
                <option value="">--- Seleccione ---</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">casa</option>
                <option value="gastos">varios gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
          </div>

          <input 
            type="submit"
            value="Añadir gasto"
          />
        </form>
    </div>
  )
}

