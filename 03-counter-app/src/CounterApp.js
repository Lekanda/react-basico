import PropTypes from 'prop-types';

const CounterApp = ({ value}) => {

    //HandleAdd
    const handleAdd = (e) => {
        // console.log(e);
        return ()=>{console.log('Hola Mundo');};
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            {/* Hacen lo mismo el 'e' se pasa automaticamente */}
            <button onClick={(e) => {handleAdd(e)}}>+1</button> 
            <button onClick={handleAdd()}>+2</button> 
        </>
    );
   
}
// Hace que el saludo sea obligatorio.
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;



