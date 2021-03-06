import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoors] = useState({x:0,y:0});
    const {x,y} = coords;

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {x: e.x, y:e.y};
            setCoors(coords);
        }

        window.addEventListener('mousemove', mouseMove)
        
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, []);
    // [] Se ejecuta por primera vez y no se ejecuta nuevamente


    return (
        <div>
            <h3>Eres genial</h3>  
            <p>
                x:{x} y:{y}
            </p> 
        </div>
    )
}
