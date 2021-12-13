import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);

    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // Si hay data coge data[0].!! Si hay data, devuleve true o false . Sí false no hace lo siguiente
    const {author,quote} = !!data && data[0]; 

    // console.log(author);


    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        <h2>Loading...</h2>
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-md-end">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente Quote
            </button>

            

            
        </div>
    )
}
