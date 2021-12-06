import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);


    return (
        <>
            <h3 className="titulo-cat">{category}</h3>

            { loading && <p className="loading">Loading...</p> } 
            {/* //&&: Si es true hace el loading, si no nada */}

            <div className="card-grid contenedor">
                <ol>
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={img.id} 
                                { ...img }
                            />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}
// { ...img }: es una forma de pasar todos los atributos de un objeto a un componente. Se pasan los atributos individualmente.
// ({id,title,url}): Asi es como se recogen los datos en el componente GifGridItem.
