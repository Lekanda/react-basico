import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";


describe('Test a componente PrimeraApp', () => {

    test('Debe mostrar el mensaje: "Hola soy goku"', () => {
        const saludo = 'Hola soy goku';
        const wrapper = render(<PrimeraApp saludo={saludo} />);

        const elemento = wrapper.getByText(saludo);

        expect(elemento).toBeInTheDocument();
    });
});