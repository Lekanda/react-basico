export const procesoPesado = (iteraciones) => {
    for(let i = 0; i < iteraciones; i++){
        console.log('Proceso pesado');
    }
    return `Proceso terminado, iteraciones: ${iteraciones}`;
}