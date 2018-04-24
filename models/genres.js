const db = require('../config/connection');

function getAllGenres() { //gets all genres
  const query = db.manyOrNone(`
    SELECT * FROM genres`); //selects names and imgs from genres
  return query;
}

function getOneGenre(id) { //gets one genre by id
  const query = db.one(`
    SELECT * FROM genres
    WHERE id = $1`, id);
  return query;
}

function getTextGenre(id) { //gets textbook by genre
  const query = db.any(`
    SELECT * FROM textbooks
    WHERE textbooks.genre_id = $1`, id);
  return query;
}



module.exports = {
  getAllGenres,
  getOneGenre,
  getTextGenre
}
