const db = require('../../config/connection');

function findAll() {
  const query = db.any(`
    SELECT * FROM users
    ORDER BY id`);
  return query;
}

function findOne(username) {
  const query = db.one(`
    SELECT * FROM users
    WHERE username = $1`, username);
  return query;
}

function findById(id) {
  const query = db.one(`
    SELECT * FROM users
    WHERE id = $1`, id);
  return query;
}

function save(user) {
    return db.one(`
      INSERT INTO users (
        username, password_digest, email, firstname, lastname
      ) VALUES (
        $/username/, $/password_digest/, $/email/, $/firstname/, $/lastname/
      )
      ON CONFLICT (username) DO UPDATE
      SET
        username        = $/username/,
        password_digest = $/password_digest/,
        email           = $/email/,
        firstname       = $/firstname/,
        lastname        = $/lastname/
      RETURNING *
    `, user);
  }

   function update(user) {
    return db.one(`
      UPDATE users
      SET
       username        = $/username/,
        password_digest = $/password_digest/,
        email           = $/email/,
        firstname       = $/firstname/,
        lastname        = $/lastname/
      RETURNING *
    `, user);
  }

function destroy(id) {
    return db.none(`
      DELETE
        FROM users
       WHERE id = $1
    `, id);
  }

  module.exports = {
    findAll,
    findOne,
    findById,
    save,
    update,
    destroy
  }
