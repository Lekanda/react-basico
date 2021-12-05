import React, { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);
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
        console.log(gifs);
    }

    // getGifs();

    return (
        <div>
            <h3>{category}</h3>
            <h3>{count}</h3>

            <button onClick={ () => setCount(count + 1)}></button>
        </div>
    )
}
