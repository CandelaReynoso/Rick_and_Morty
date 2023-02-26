const http = require('http');
const getCharById = require('./src/controllers/getCharById');
const getCharDetail = require('./src/controllers/getCharDetail');

const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url.includes('onsearch')) {
    const id = req.url.split('/').pop();
    getCharById(res, id);
  } else if (req.url.includes('detail')) {
    const id = req.url.split('/').pop();
    getCharDetail(res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(PORT, 'localhost');









/* const http = require('http');
var characters = require('./src/utils/data');
const PORT = 3001;

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*'); // tiene que ver con el FRONT , que tenga acceso total a todo.

    // comenzamos a definir los endpoints (rutas) de nuestro servidor.
    if(req.url.includes('rickandmorty/character')){
       // si la request que me esta llegando y su URL incluye esto: 
        let id = req.url.split('/').at(-1);

        let characterFilter = characters.filter( char =>char.id === Number(id));

        res.writeHead(200, {"Content-type": "aplication/json"}).end(JSON.stringify(characterFilter[0]))
    } 
}).listen(PORT, 'localhost') */
