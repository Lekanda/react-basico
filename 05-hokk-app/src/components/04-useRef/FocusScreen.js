import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(inputRef);

    const handleClick = () => {
        // document.querySelector('input').focus(); // Hace focus en el campo tu nombre
        // document.querySelector('input').select(); // hace focus y selecciona el texto
        inputRef.current.select(); // hace focus y selecciona el texto
        console.log(inputRef);
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                ref={inputRef}
                className="form-control"
                placeholder='Su nombre'
                
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick}
            >
                Focus
            </button>
        </div>
    )
}
