import { useState } from "react";

export const useForm = () => {
  
    const [ formState, setFormState ] = useState( {
        nombreGasto: '',
        cantidadGasto: '',
        categoria: ''
      } );

    const hundleChange = ({ target: { name, value } }) => {
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const hundleReset = () => setFormState( initialForm );

    return {
        ...formState,
        formState,
        setFormState,
        hundleChange,
        hundleReset,
    }
}