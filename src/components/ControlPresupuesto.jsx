import { useEffect, useState } from "react";
import { formatearPresupuesto } from "../helpers"

const ControlPresupuesto = ( {presupuesto, guardarGastos} ) => {

    const [gastado, setGastado] = useState(0);
    const [disponible, setDisponible] = useState(0);
    
    useEffect(() => {
        
        const totalGastado = guardarGastos.reduce( (total, gasto) =>  total + Number(gasto.cantidadGasto), 0);
        setGastado(totalGastado);
        
        const totalDisponible = presupuesto - totalGastado;
        setDisponible(totalDisponible);
    }, [guardarGastos])
    
return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

        <div>
            <p>Gráficas aqui</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span> {formatearPresupuesto(presupuesto) }
            </p>
            <p>
                <span>Disponible:</span> {formatearPresupuesto(disponible) }
            </p>
            <p>
                <span>Gastado:</span> {formatearPresupuesto(gastado) }
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto