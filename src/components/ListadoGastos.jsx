import { Gasto } from "./Gasto"

export const ListadoGastos = ({ guardarGastos, seteditarGastos, eliminarGasto }) => {
  return (

    <>
      {guardarGastos.length
        ? <>
          <div className="listado-gastos contenedor">
            {
              guardarGastos.map(gasto => (
                <Gasto
                  key={gasto.id}
                  eliminarGasto={eliminarGasto}
                  seteditarGastos={seteditarGastos}
                  gasto={gasto}
                  />
              ))
            }
          </div>
        </>
        : <p className="no-gastos">No hay gastos aún</p>
      }
    </>

  )
}
