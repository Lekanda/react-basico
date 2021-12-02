import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';


describe('Test a Counter App', () => {

    let wrapper = shallow(<CounterApp />);;
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })


    
    test('Debe mostrar el <counterApp /> correctamente ', () => {
        
        // console.log(wrapper.debug());

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el numero por defecto 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>);
        const numero = wrapper.find('h2').text().trim();

        expect(numero).toBe('100');
    });

    test('Debe de incrementar con el boton +1', () => {
        
        const btn = wrapper.find('button').at(0).simulate('click');
        // console.log(btn.debug());
        
        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);

        expect(counterText).toBe('101');

    });

    test('Debe de incrementar con el boton -1', () => {
        
        const btn = wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        // console.log(btn.debug());
        
        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);

        expect(counterText).toBe('99');

    });

    test('Debe con el boton Reset ponerse a 0', () => {
        
        const wrapper = shallow(<CounterApp value={105}/>);


        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);

        expect(counterText).toBe('105');

    });

    

});