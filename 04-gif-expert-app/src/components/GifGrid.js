import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([]);
    useEffect(() => {
        getGifs(category)
            .then(imgs => setimages(imgs));
        
    },[category]);

    

    return (
        <>
            <h3 className="titulo-cat">{category}</h3>
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
