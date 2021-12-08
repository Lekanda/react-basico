import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Probar Componente AddCategory', () => {

    const setCategories = () => {};

    test('Debe de mostrarse correctamnete en el snapshot', () => {
        const wrapper = shallow(<AddCategory setCategories={ setCategories } /> );
        expect(wrapper).toMatchSnapshot();
    })
});