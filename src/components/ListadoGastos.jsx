import { Gasto } from "./Gasto"

export const ListadoGastos = ({
  guardarGastos,
  seteditarGastos,
  eliminarGasto,
  gastosFiltrados,
  filtro
}) => {

  return (
    <div className="listado-gastos contenedor">

      <>
        {
          (filtro)
            ? <>
              <p className="no-gastos"> {(gastosFiltrados.length) ? `Filtrando: ${filtro}` : 'No se encontraron resultados'} </p>
              {
                gastosFiltrados.map(gasto => (
                  <Gasto
                    key={gasto.id}
                    eliminarGasto={eliminarGasto}
                    seteditarGastos={seteditarGastos}
                    gasto={gasto}
                  />
                ))
              }
            </>
            : <>
              <p className="no-gastos"> {(!guardarGastos.length) &&  'No tienes gastos aún'} </p>

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
            </>
        }

      </>

    </div>



  )
}
