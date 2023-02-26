

const getCharDetail = (res, id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { image, name, gender, status, origin, species } = data;
      const characterDetail = { id, image, name, gender, status, origin, species };
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(characterDetail));
    })
    .catch((error) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    });
};
module.exports = getCharDetail;
