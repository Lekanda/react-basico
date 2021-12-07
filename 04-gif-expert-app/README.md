## Truco para colgar en GitHubPages

1- Instalamos el siguiente paquete en nuestra aplicación:

                    `npm install --save-dev gh-pages`



2- **Modificaremos** nuestro **package.json**, antes del "**name**", añadimos lo siguiente:

"homepage":"https://yourusername.github.io/repository-name",

*Donde cambiaremos yourusername por nuestro nombre de github y repository-name por el nombre que hayamos dado a nuestro repositorio.*



3- Una vez hecho, en el mismo archivo debemos añadir en la sección de **scripts** (donde encontramos "start", "build", etc..) lo siguiente:
```json
                "predeploy": "npm run build",
                "deploy": "gh-pages -d build",
```
En mi caso lo añadí los primeros, dentro de scripts, seguido de los que estaban.



4- Hecho esto, **sí no hemos creado nuestra build** utilizamos el comando:

                    `npm run build`

Acto seguido utilizaremos el siguiente comando, para realizar el deploy en gh-pages:

                        npm run deploy

Esto creará un nuevo **Branch** (rama) dentro de nuestro repositorio de nombre **gh-pages**.



5- Por último, lo único que debemos hacer es ir a Settings dentro de nuestro repositorio de GitHub, y en la sección de Github Pages estableceremos lo siguiente:

- **Branch**: gh-pages

- **Directorio**: /root



Guardamos los cambios y listo, a partir de ahora tendremos dos ramas en nuestro repositorio, una con nuestro código (main) y otra con la build publicada en gh-pages.

Nuestra aplicación debería funcionar a la perfección de ahora en adelante sin problemas con las rutas ni renombrar directorio alguno, en mi opinión todo mucho más limpio y ordenado.

Si alguno quisiera revisar esto que menciono, aquí os dejo mi repositorio:

https://github.com/init1-dev/React-GifExpertApp



## Aplicaciones en servidores

1. [GifExpertApp](https://lekanda.github.io/react-basico/) : Aplicacion para busqueda de **Gifs**