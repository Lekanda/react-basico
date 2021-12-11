import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Componente montado ');// Lo que hace cuando cumple (Montado)
        return () => {
            console.log('Componente desmontado '); // Lo que hace cuando no cumple (Desmonatado)
        }
    }, []);
    // [] Se ejecuta por primera vez y no se ejecuta nuevamente


    return (
        <div>
            <h3>Eres genial</h3>   
        </div>
    )
}
