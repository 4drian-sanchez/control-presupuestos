import {
  LeadingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatearFecha, formatearPresupuesto } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioImagenes = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones
}

export const Gasto = ({
  categoria,
  nombreGasto: nombre,
  fecha,
  cantidadGasto: cantidad,
  gasto,
  seteditarGastos

 }) => {

  const leadingActions = () => {
    return <LeadingActions>
      <SwipeAction onClick={() => seteditarGastos(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  }

  const trailingActions = () => {
    return <TrailingActions>
      <SwipeAction
        onClick={() => console.info('swipe action triggered')}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  }

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">

          <div className="contenido-gasto">

            <img
              src={diccionarioImagenes[categoria]}
              alt="Imagen del gasto"
            />

            <div className="descripcion-gasto">
              <p className="categoria">
                {categoria}
              </p>

              <p className="nombre-gasto">
                {nombre}
              </p>

              <p className="fecha-gasto">
                Agregado el: {''}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className='cantidad-gasto'>{formatearPresupuesto(cantidad)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}
