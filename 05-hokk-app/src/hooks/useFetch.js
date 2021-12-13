import { useState,useEffect } from 'react'

export const useFetch = (url) => {
    
    const [state, setState] = useState({loading:true, error:null, data:null, });

    useEffect(() => {
        
        fetch(url)
            .then(response => response.json())
            
            .then(data => {
                setState({
                    loading:false,
                    error:null,
                    data 
                })})


            .catch(error => setState({error, loading:false}));
    }, [url])

    return state;

}
