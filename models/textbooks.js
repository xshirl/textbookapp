const db = require('../config/connection');

function getAllTexts() { //returns all textbooks data
  const query = db.manyOrNone(`
    SELECT textbooks.id, textbooks.title, textbooks.author, textbooks.price, textbooks.rating, textbooks.img, genres.name
    FROM textbooks
    JOIN genres ON genres.id = textbooks.genre_id
    ORDER BY textbooks.id
    `);
  return query;
}

function getOneText(id) { //return one book's data by id
  const query = db.one(`
    SELECT * FROM textbooks
    WHERE id = $1`, id);
  return query;
}

function createText(textbook) { //creates textbook using post form
  const query = db.one(`
    INSERT INTO textbooks
    (title, author, price, rating, img, isincart, isrented, genre_id)
    VALUES ($/title/, $/author/, $/price/, $/rating/, $/img/, false, false, $/genre_id/)
    RETURNING *
    `, textbook);
  return query;
}

function updateText(textbook) { //updates textbook data
  const query = db.one(`
    UPDATE textbooks
    SET title = $/title/, author = $/author/, price = $/price/, rating = $/rating/,
    img = $/img/, isincart = $/isincart/, isrented = $/isrented/, genre_id = $/genre_id/
    WHERE id = $/id/
    RETURNING *
    `, textbook);
  return query;
}

function deleteText(id) { //deletes textbook by id
  const query = db.none(`
    DELETE FROM textbooks
    WHERE id = $1`, id);
  return query;
}

function cartTexts() { //returns all books where isincart = true
  const query = db.manyOrNone(`
    SELECT * FROM textbooks
    WHERE isincart = true`);
  return query;
}

// function myTexts() {
//   const query = db.any(`
//     SELECT * FROM textbooks
//     WHERE isincart = true AND isrented = true`);
//   return query;

// }


module.exports = {
  getAllTexts,
  getOneText,
  createText,
  updateText,
  deleteText,
  cartTexts
}
