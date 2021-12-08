import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en GifGridItem', () => {
    const title = 'Titulo';
    const url = 'https://localhost/img.jpg';
   

    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('Debe mostrar el <GifGridItem/>', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe usar title correctamente en el p y el atributo title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la etiqueta imagen Los atributos alt y src correctos.', () => {
        
        const img = wrapper.find('img');
        // console.log(img.html());
        // console.log(img.props());
        // console.log(img.props().src);

        // 2 formas de hacerlo
        expect(img.prop('src')).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('Debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.prop('className'));
        const className = div.prop('className');
        // expect(className.includes('animate__fadeIn')).toBe(true);
        expect(div.props().className).toContain('animate__fadeIn');
    });
})

