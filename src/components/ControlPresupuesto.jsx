const ControlPresupuesto = ( {presupuesto} ) => {

  const formatearPresupuesto = (cantidad = '') => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  return formatter.format(cantidad)
  }
  
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

        <div>
            <p>Gráficas aqui</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:</span> {formatearPresupuesto(presupuesto) }
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto