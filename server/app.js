const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const userController = require('./controllers/users-controller');
const itemsController = require('./controllers/items-controller');
const imageController = require('./controllers/image-controller');

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-TypeError, Accept');
  next();
});

app.get('/user/:email', (req, res, err) => {
  // joins user table and item table
  res.status(200);
});

app.get('/item/:id', itemsController.getOneItem, (req, res, err) => {
  res.status(200).json(res.locals.oneItem);
});

app.get('/search/:item_name', itemsController.searchItem, (req, res, err) => {
  res.status(200).json(res.locals.search);
});

app.get('/category/:category', itemsController.searchCategory, (req, res, err) => {
  res.status(200).json(res.locals.category);
});

app.get('/allItems', itemsController.getAllItems, (req, res, err) => {
  res.status(200).json(res.locals.items);
});

app.post('/addUser', userController.addUser, (req, res, err) => {
  res.status(200).json(res.locals.data);
});

app.post('/addItem', imageController.upload, itemsController.addItem, (req, res, err) => {
  res.status(200).json(res.locals.data);
});

app.delete('/deleteItem', (req, res, err) => {
  // deletes item from database
  res.status(200);
});

app.use(express.static(path.resolve(__dirname, '../build')));

module.exports = app;
