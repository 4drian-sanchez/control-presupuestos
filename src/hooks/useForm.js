import { useState } from "react";

export const useForm = (initialForm = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );

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