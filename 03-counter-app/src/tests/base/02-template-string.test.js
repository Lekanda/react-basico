import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () =>{
    test('getSaludo debe retornar Hola Fernando ', () =>{
        // 1.Inicializacion
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    });

    //getSaludo debe de retornar Hola Carlos! sí no hay argumento nombre
    test('getSaludo debe retornar Hola Carlos! sí no hay argumento nombre', () =>{
        // 1.Inicializacion
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    });
})