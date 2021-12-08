import {getGifs} from '../../helpers/getGifs';

describe('Pruebas en helper getGifs.js . Fetch', () =>{

    test('Debe traer 10 elementos ', async () => {
    //    getGifs('One Punch')
    //         .then(gifs => {
    //             expect(gifs.length).toBe(10);
    //         });
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('', async () => {
            const gifs = await getGifs('');
            // expect(gifs.length).toBe(10);
        });
});