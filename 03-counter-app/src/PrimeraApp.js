import { Fragment } from "react";

const PrimeraApp = () => {

    const saludo = {
        nombre: "Juan",
        apellido: "Perez"
    };



    return (
        <>
            <h1>Hola {saludo.nombre} {saludo.apellido}</h1>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>Mi primera App</p>
        </>
    );
}

export default PrimeraApp;