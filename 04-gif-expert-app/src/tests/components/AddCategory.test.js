import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Probar Componente AddCategory', () => {

    const setcategories = () => {};
    const wrapper = shallow(<AddCategory setcategories={setcategories}/> );
    

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
});