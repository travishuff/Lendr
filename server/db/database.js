const pg = require('pg');

const db = {};

///////////////////////////////////
// Figure out where to direct PG database
// Defaults to your OSX login and username
const uri;

pg.connect(uri, (err, db_) => {
  if (err) throw new Error(err);
  db.conn = db_;
});