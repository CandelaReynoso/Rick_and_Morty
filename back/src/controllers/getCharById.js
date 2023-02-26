

const getCharById = (res, id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { id, image, name, gender, species } = data;
      const objeto = { id, image, name, gender, species };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(objeto));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports= getCharById;
