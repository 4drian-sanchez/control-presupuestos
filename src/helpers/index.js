export const generarId = () => {
    const radom = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return radom + fecha
}

export const formatearPresupuesto = (cantidad = '') => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  return formatter.format(cantidad)
  }

export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return fechaNueva.toLocaleDateString( 'es-ES', opciones); 
}