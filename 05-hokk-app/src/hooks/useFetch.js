import { useState,useEffect, useRef } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({loading:true, error:null, data:null, });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }

    }, [])


    useEffect(() => {

        setState({loading:true, error:null, data:null, });
        
        fetch(url)
            .then(response => response.json())
            .then(data => {

                    if(isMounted.current) {
                        setState({
                            loading:false,
                            error:null,
                            data 
                        })
                    }
            })
            .catch(error => setState({error, loading:false}));
            
    }, [url])

    return state;

}
