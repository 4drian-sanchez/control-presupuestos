import cerrarModal from '../img/cerrar.svg'

export const Modal = ( { setModal } ) => {

    const hundleMoodal = () => {
        setModal(false)
    }

  return (
    <div className="modal">
        <div  
            className="cerrar-modal"
            onClick={ hundleMoodal }
            >
            <img src={ cerrarModal } alt="Cerrar el modal" />
        </div>
    </div>
  )
}

