const db = require('../config/connection');

function getAllTexts() {
  const query = db.manyOrNone(`
    SELECT textbooks.id, textbooks.title, textbooks.author, textbooks.rating, textbooks.img, genres.name
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
    (title, author, price, rating, img, isincart, isrented, genre_id)
    VALUES ($/title/, $/author/, $/price/, $/rating/, $/img/, false, false, $/genre_id/)
    RETURNING *
    `, textbook);
  return query;
}

function updateText(textbook) {
  const query = db.one(`
    UPDATE textbooks
    SET title = $/title/, author = $/author/, price = $/price/, rating = $/rating/,
    img = $/img/, isincart = $/isincart/, isrented = $/isrented/, genre_id = $/genre_id/
    WHERE id = $/id/
    RETURNING *
    `, textbook);
  return query;
}

function deleteText(id) {
  const query = db.none(`
    DELETE FROM textbooks
    WHERE isincart= true AND id = $1`, id);
  return query;
}

function cartTexts() {
  const query = db.manyOrNone(`
    SELECT * FROM textbooks
    WHERE isincart = true`);
  return query;
}

function myTexts() {
  const query = db.any(`
    SELECT * FROM textbooks
    WHERE isincart = true AND isrented = true`);
  return query;

}
module.exports = {
  getAllTexts,
  getOneText,
  createText,
  updateText,
  deleteText,
  cartTexts,
  myTexts
}
