import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([]);
    useEffect(() => {
        getGifs();
    },[]);

    const getGifs =async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morti&limit=10&api_key=Fy5o4SLF3Q2ij74a1bG1N3NoL20R8Cv8';

        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        // console.log(gifs);
        setimages(gifs);
    }

    // getGifs();

    return (
        <div>
            <h3>{category}</h3>
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
    )
}
// { ...img }: es una forma de pasar todos los atributos de un objeto a un componente. Se pasan los atributos individualmente.
// ({id,title,url}): Asi es como se recogen los datos en el componente GifGridItem.
