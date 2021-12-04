import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import ReactDOM from 'react-dom';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // categories.push('HunterXHunter');
    //     // console.log(categories);
    //     // setcategories([...categories, 'HunterXHunter']);
    //     setcategories( cats => [...cats, 'HunterXHunter']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setcategories={setcategories}/>
            <hr/>
            <ol>
                {  
                    categories.map( (category => 
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                    )) 
                }
                
            </ol>
        </>
    )
}

export default GifExpertApp
