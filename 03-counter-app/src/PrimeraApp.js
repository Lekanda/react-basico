import { Fragment } from "react";
import PropTypes from 'prop-types'

const PrimeraApp = ( {saludo} ) => {
        
    return (
        <>
            <h1>{saludo} </h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>Mi primera App</p>
        </>
    );
}

// Hace que el saludo sea obligatorio.
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;