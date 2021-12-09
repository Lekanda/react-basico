import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import ReactDOM from 'react-dom';

export const GifExpertApp = ({defaultCategories=[]}) => {

    // const [categories, setcategories] = useState(['One Punch']);
    const [categories, setcategories] = useState(defaultCategories);
    

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
