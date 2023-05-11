import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { formatearPresupuesto } from "../helpers";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
    presupuesto,
    setPresupuesto,
    guardarGastos,
    setguardarGastos,
    setIsValid
}) => {

    const [gastado, setGastado] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {

        const totalGastado = guardarGastos.reduce((total, gasto) => total + Number(gasto.cantidadGasto), 0);
        setGastado(totalGastado);
        const totalDisponible = presupuesto - totalGastado;
        setDisponible(totalDisponible);

        const calcularPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(0);

        setTimeout(() => {
            setPorcentaje(calcularPorcentaje);
        }, 500);

    }, [guardarGastos])

    const hundleReset = () => {
        Swal.fire({
            title: '¿Estás seguro que deseas resetear la app?',
            text: "¡Eliminarás todos tus gastos guardados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setguardarGastos([]);
                setPresupuesto('');
                setIsValid(false);

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">

            <div>
                <CircularProgressbar
                    text={`${porcentaje}% gastado`}
                    value={porcentaje}
                    styles={buildStyles({
                        pathColor: disponible <= 0 ? '#DC2525' : '#3b82f6',
                        textColor: disponible <= 0 ? '#DC2525' : '#3b82f6',
                        pathTransitionDuration: 0.2,
                    })
                    }
                />
            </div>

            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    onClick={hundleReset}
                >
                    resetear la app
                </button>
                <p>
                    <span>Presupuesto:</span> {formatearPresupuesto(presupuesto)}
                </p>
                <p className={disponible <= 0 ? 'negativo' : ''}>
                    <span>Disponible:</span> {formatearPresupuesto(disponible)}
                </p>
                <p>
                    <span>Total Gastado:</span> {formatearPresupuesto(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto