
const apiKey = 'Fy5o4SLF3Q2ij74a1bG1N3NoL20R8Cv8';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );

