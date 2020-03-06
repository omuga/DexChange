# DexChange
***DexChange*** es una aplicación móvil que facilita el intercambio de cartas para juegos de cartas coleccionables como **Pokemon TCG**, **Magic the Gathering** o **Yu-Gi-Oh**.

Entre las funcionalidades de la aplicación, se puede encontrar :
* Catálogo de cartas ofrecidas por la comunidad
* Sistema de rating para los vendedores y compradores
* Chat entre oferente y demandante para poder realizar cualquier consulta
* Denuncias a vendedores fraudulentos

## Backend
### Instalación
En la carpeta principal (DexChange) están los archivos que corresponden al Backend.
Se requiere la previa instalación de *NodeJS*, una vez descargado o clonado el repositorio, se instalan las dependencias con:
```
npm install
```
Además de instalar las librerias cors y jsonwebtoken:
```
npm install jsonwebtoken
npm install cors
```

Además, debe instalarse la versión actual de [MongoDB](https://www.mongodb.com/download-center/community?jmp=docs)

### Funcionamiento
Para ejecutar el servidor Backend a través de la línea de comandos se ejecuta : ```node index```.
Por defecto se ejecutará en el puerto 3000.

### Rutas
| Metodo    |          URI           |        Ruta         | Controlador                      |   Funcionalidad   |
|-----------|------------------------|---------------------|----------------------------------|-------------------|
| POST  	| /auth/authenticate          | ./routes/Auth.route          | ../controllers/User.controller   | Autenticación de usuario  |
| POST      | /auth/register              | ./routes/Auth.route          | ../controllers/User.controller   | Registro de usuario  |
| GET      | /users              | ./routes/User.route         | ../controllers/User.controller   | Obtener todos los usuarios |
| GET      | /users/:id             | ./routes/User.route         | ../controllers/User.controller   | Obtener detalles de un usuario según id |
| DELETE      | /users/:id              | ./routes/User.route         | ../controllers/User.controller   | Eliminar usuario según id |
| GET      | /mtgcards              | ./routes/MGTPost.route         | ../controllers/MTGPost.controller   | Obtener todas las cartas del juego MTG |
| GET      | /users/:idUser   | ./routes/MGTPost.route         | ../controllers/MTGPost.controller   | Obtener todas las cartas MTG que tiene un usuario según id |
| POST      | /mtgcards              | ./routes/MGTPost.route         | ../controllers/MTGPost.controller   | Crear una nueva carta MTG|
| GET      | /mtgcards/:id             | ./routes/MGTPost.route         | ../controllers/MTGPost.controller   | Obtener detalles de una carta MTG según id |
| PUT      | /mtgcards/:id            | ./routes/MGTPost.route         | ../controllers/MTGPost.controller   | Actualizar una carta particular de MTG según id |
| DELETE      | /mtgcards/:id            | ./routes/MGTPost.route         | ../controllers/MTGPost.controller   | Eliminar una carta particular de MTG según id |
| GET      | /pokemoncards              | ./routes/PokemonPost.route         | ../controllers/PokemonPost.controller   | Obtener todas las cartas del juego Pokemon TCG |
| POST      | /pokemoncards              | ./routes/PokemonPost.route         | ../controllers/PokemonPost.controller   | Crear una nueva carta Pokemon TCG|
| GET      | /pokemoncards/:id             | ./routes/PokemonPost.route         | ../controllers/PokemonPost.controller   | Obtener detalles de una carta Pokemon TCG según id |
| PUT      | /pokemoncards/:id            | ./routes/PokemonPost.route         | ../controllers/PokemonPost.controller   | Actualizar una carta particular de Pokemon TCG según id |


## Frontend
### Instalación
En la carpeta DexChange-frontend están los archivos que corresponden al Frontend. Al igual que en el Backend, también se requiere la previa instalación de *NodeJS*, por lo que se debe ejecutar:
```
npm install
```
Además, se deben instalar las dependencias de Ionic para *NodeJS*:
```
npm install -g @ionic/cli
```

Cuando se ponga en funcionamiento el software con `ionic serve` por primera vez, el sistema exigirá instalar los scripts de React:
```
[INFO] Looks like react-scripts isn't installed in this project.

       This package is required for this command to work properly. The package provides a CLI utility, but the
       react-scripts binary was not found in your PATH.

? Install react-scripts? (Y/n)
```
Se debe entonces presionar Y para instalar (esto puede tardar unos minutos).



### Funcionamiento
Para ejecutar el servidor, se debe ejecutar el comando:
```
ionic serve
```
**Nota**:Para que funcione correctamente, también debe estar ejecutandose el servidor Backend


## Referencias
- [MongoDB](https://www.mongodb.com/download-center/community?jmp=docs)
