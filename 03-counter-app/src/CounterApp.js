import PropTypes from 'prop-types';

const CounterApp = ({ value}) => {


    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
        </>
    );
   
}
// Hace que el saludo sea obligatorio.
CounterApp.propTypes = {
    value: PropTypes.number
}
export default CounterApp;



