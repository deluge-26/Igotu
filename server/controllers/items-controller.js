
const pg = require('pg');
// postgres library
const URI = process.env.DB_URI;

const itemController = {};

// expects item ID => returns one object (in an array?)
itemController.getOneItem = (req, res, next) => {
  // const URI = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  const pool = new pg.Pool({
    connectionString: URI,
  });
  const query = {
    text: 'SELECT * FROM items WHERE id = $1',
    values: [req.params.id],
  };
  pool.query(query.text, query.values, (err, items) => {
    console.log('These are the items: ', items);
    if (err) {
    } else {
      res.locals.oneItem = items.rows;
      next();
    }
  });
};

// adds an item to database , returns item upon saving
// add userId field for the seller that added it.
// userId could be on body or on cookie
itemController.addItem = (req, res, next) => {
  // const URI = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  const pool = new pg.Pool({
    connectionString: URI,
  });
  console.log(`
  user_id: ${req.body.user_id}\n
  photo: ${req.body.photo}\n
  price: ${req.body.price}\n
  item_name: ${req.body.item_name}\n
  item_details: ${req.body.item_details}\n
  created_at: ${req.body.created_at}\n
  `);
  const query = {
    text:
      'INSERT INTO items(user_id, photo, price, item_name, item_details, created_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [
      req.body.user_id,
      req.body.photo,
      req.body.price,
      req.body.item_name,
      req.body.item_details,
      req.body.created_at,
    ],
  };
  pool.query(query.text, query.values, (err, user) => {
    if (err) {
      console.log(`Here's the error: ${err}`);
    } else {
      res.locals.data = user.rows[0];
      next();
    }
  });
};

// populates home page => returns an array
itemController.getAllItems = (req, res, next) => {
  // const URI = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  const pool = new pg.Pool({
    connectionString: URI,
  });
  const query = {
    text: 'SELECT * FROM items',
  };
  pool.query(query.text, (err, items) => {
    if (err) {
      console.log(`Here's the error: ${err}`);
    } else {
      console.log(items.rows);
      res.locals.items = items.rows;
      next();
    }
  });
};

// TODO: loosen up db query to make more flexible searches
// employ an npm library to help?
// make the query less strict?
itemController.searchItem = (req, res, next) => {
  // const URI = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  const pool = new pg.Pool({
    connectionString: URI,
  });
  const query = {
    text: 'SELECT * FROM items WHERE item_name = $1',
    values: [req.params.item_name],
  };
  pool.query(query.text, query.values, (err, items) => {
    if (err) {
    } else {
      res.locals.search = items.rows;
      next();
    }
  });
};

// filters the items from db by category
itemController.searchCategory = (req, res, next) => {
  // const URI = 'postgresql://igotu:eyegotchu@igotu-master.cu4n5g8jahnw.us-west-2.rds.amazonaws.com:5432/igotu';
  const pool = new pg.Pool({
    connectionString: URI,
  });
  const query = {
    text: 'SELECT * FROM items WHERE category = $1',
    values: [req.params.category],
  };
  pool.query(query.text, query.values, (err, items) => {
    if (err) {
    } else {
      res.locals.category = items.rows;
      next();
    }
  });
};

module.exports = itemController;
