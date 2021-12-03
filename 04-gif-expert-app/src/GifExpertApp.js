import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
// import ReactDOM from 'react-dom';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

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
            <AddCategory/>
            <hr/>
            <ol>
                {  
                    categories.map( category => {
                        return <li key={category}>{category}</li>;
                    } ) 
                }
            </ol>
        </>
    )
}

export default GifExpertApp
