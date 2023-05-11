import { Gasto } from "./Gasto"

export const ListadoGastos = ({ guardarGastos, seteditarGastos }) => {
  return (

    <>
      {guardarGastos.length
        ? <>
          <div className="listado-gastos contenedor">
            {
              guardarGastos.map(gasto => (
                <Gasto
                  key={gasto.id}
                  seteditarGastos={seteditarGastos}
                  gasto={gasto}
                  {...gasto} />
              ))
            }
          </div>
        </>
        : <p className="no-gastos">No hay gastos aún</p>
      }
    </>

  )
}
