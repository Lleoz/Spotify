# Desplegando el proyecto

Realizar la descarga del proyecto e instalar todos las librerias con el comando

### `npm i`

Para correr el proyecto una vez tenga todo instalado:

### `npm start`

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

Los test se pueden correr con el comando.

### `npm test`

**Nota: Tambien es posible correr el aplicativo en docker, los comandos son los siguientes**

Para crear la imagen:

### `docker build -t spotify .`

Para correr el contenedor:

### `docker run --name spotify -d -p 3000:3000 spotify`

"# Spotify" 
