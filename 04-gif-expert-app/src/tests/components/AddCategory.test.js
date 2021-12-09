import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Probar Componente AddCategory', () => {

    const setcategories = jest.fn();

    let wrapper = shallow(<AddCategory setcategories={setcategories}/> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategories={setcategories}/> );

    })
    

    test('Debe de mostrarse correctamnete en el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    // test('Debe de cambiar la caja de texto', () => {
    //     const input = wrapper.find('input');
    //     const value = 'Hola mundo';
    //     input.simulate('change', { target: { value } });
    //     expect(wrapper.find('p').text().trim()).toBe(value);
    // })
    test("debe de cambiar la caja de texto", () => {
        const input = wrapper.find("input");
        const value = "Hola mundo";
        input.simulate("change", { target: { value } });
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);
      });



    test('No debe de postear la informacion con submit', () => {
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        expect(setcategories).not.toHaveBeenCalled();
    })

    test('Debe llamar a setcategories y limpiar la caja', () => {
        const value = "Hola mundo";
        const input = wrapper.find("input");
        input.simulate("change", { target: { value } });

        wrapper.find("form").simulate("submit", { preventDefault() {} });

        expect(setcategories).toHaveBeenCalled();
        // expect(setcategories).toHaveBeenCalledTimes(2);
        expect(setcategories).toHaveBeenCalledWith( expect.any(Function) );

        expect(wrapper.find('input').prop('value')).toBe('')
    })

});