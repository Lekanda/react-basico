import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en Hook useFetchGifs.js', () => {
    

    test('Debe de retornar el estado inicial', async () => {
        
        const {result,waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        // const {data,loading} = useFetchGifs('One Punch');
        // console.log(data,loading);
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test(' Debe retornar un arreglo de imagenes y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        // const {data,loading} = useFetchGifs('One Punch');
        // console.log(data,loading);

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);

    });
    
});