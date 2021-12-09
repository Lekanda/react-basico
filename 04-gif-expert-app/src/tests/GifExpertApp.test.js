import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Tests en GifExpertApp.js', ()=>{

    test('Debe comparar Snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
})