// TODO: update to pg-promise instead of pg
const pg = require('pg');

const db = {};
const URI = process.env.DB_URI;

pg.connect(URI, (err, db_) => {
  if (err) throw new Error(err);
  db.conn = db_;
});


module.exports = db;
