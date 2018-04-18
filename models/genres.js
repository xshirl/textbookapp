const db = require('../config/connection');

function getAllGenres() {
  const query = db.manyOrNone(`
    SELECT * FROM genres`);
  return query;
}

function getOneGenre(id) {
  const query = db.one(`
    SELECT * FROM genres
    WHERE id = $1`, id);
  return query;
}

function getTextGenre(id) {
  const query = db.any(`
    SELECT * FROM textbooks
    JOIN genres ON genres.id = textbooks.genre_id
    WHERE textbooks.genre_id = $1`, id);
  return query;
}

module.exports = {
  getAllGenres,
  getOneGenre,
  getTextGenre
}
