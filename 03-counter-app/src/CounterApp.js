import React,{useState} from 'react';

import PropTypes from 'prop-types';

const CounterApp = ({ value}) => {

    const [counter,setCounter] = useState(0);



    //HandleAdd
    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* Hacen lo mismo el 'e' se pasa automaticamente */}
            {/* <button onClick={(e) => {handleAdd(e)}}>+1</button>  */}
            <button onClick={handleAdd}>+1</button> 
        </>
    );
   
}
// Hace que el saludo sea obligatorio.
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;



