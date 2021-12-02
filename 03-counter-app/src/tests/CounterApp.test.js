import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';


describe('Test a Counter App', () => {
    
    test('Debe mostrar el <counterApp /> correctamente ', () => {
        const wrapper = shallow(<CounterApp />);
        // console.log(wrapper.debug());

        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar el numero por defecto 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        const numero = wrapper.find('h2').text().trim();
        console.log(numero);

        expect(numero).toBe('100');
    });
});