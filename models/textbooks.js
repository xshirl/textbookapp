const db = require('../config/connection');

function getAllTexts() {
  const query = db.manyOrNone(`
    SELECT textbooks.title, textbooks.author, textbooks.rating, textbooks.image, genres.name
    FROM textbooks
    JOIN genres ON genres.id = textbooks.genre_id
    `);
  return query;
}

function getOneText(id) {
  const query = db.one(`
    SELECT * FROM textbooks
    WHERE id = $1`, id);
  return query;
}

function createText(textbook) {
  const query = db.one(`
    INSERT INTO textbooks
    (title, author, rating, image, genre_id)
    VALUES ($/title/, $/author/, $/rating/, $/image/, $/genre_id/)
    RETURNING *
    `, textbook);
  return query;
}

function updateText(textbook) {
  const query = db.one(`
    UPDATE textbooks
    SET title = $/title/, author = $/author/, rating = $/rating,
    image = $/image/, genre_id = $/genre_id
    WHERE id = $/id/
    RETURNING *
    `, textbook);
  return query;
}

function deleteText(id) {
  const query = db.none(`
    DELETE FROM textbooks
    WHERE id = $1`, id);
  return query;
}

module.exports = {
  getAllTexts,
  getOneText,
  createText,
  updateText,
  deleteText
}
