import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en GifGridItem', () => {
    const title = 'Titulo';
    const url = 'https://localhost/img.jpg';
    
    test('Debe mostrar el <GifGridItem/>', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
        
        expect(wrapper).toMatchSnapshot();
    });
})

