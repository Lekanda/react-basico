import React,{useState} from 'react';

import PropTypes from 'prop-types';

export const CounterApp = ({ value=100}) => {

    const [counter,setCounter] = useState(value);



    //HandleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    }
    //handleReset
    const handleReset = () => {
        setCounter((c) => c=value);    
    }
    //handleSubstract
    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* Hacen lo mismo el 'e' se pasa automaticamente */}
            {/* <button onClick={(e) => {handleAdd(e)}}>+1</button>  */}
            <button onClick={handleAdd}>+1</button> 
            <button onClick={handleReset}>Reset</button> 
            <button onClick={handleSubstract}>-1</button> 
            {/* De esta forma se haria sin crear las funciones */}
            {/* <button onClick={()=> setCounter(value)}>Reset</button> 
            <button onClick={()=> setCounter(counter -1)}>-1</button>  */}
        </>
    );
   
}
// Hace que el saludo sea obligatorio.
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;



