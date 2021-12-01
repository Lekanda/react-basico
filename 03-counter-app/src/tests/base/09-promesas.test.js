import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas en el 09-promesas.js',()=>{

    test('getHeroeByIdAsync: Retornar un heroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();// para que se termine la prueba y no se quede esperando
            })
    });

    test('Debe obtener un error si heroe por id no existe', (done) => { 
        
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    });
})