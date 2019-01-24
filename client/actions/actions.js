import * as types from '../constants/actionTypes';


export const fetchItemsStart = () => ({
  type: types.GET_ALL_ITEMS_START,
});

export const fetchedItems = resp => ({
  type: types.GET_ALL_ITEMS,
  payload: resp,
});

export const fetchError = err => ({
  type: types.GET_ALL_ITEMS_ERR,
  payload: err,
});

export const searchValueChange = value => ({
  type: types.SEARCH_BOX_CHANGE,
  payload: value,
});

export const createItem = item => (dispatch) => {
  console.log('button pushed');
  console.log('item: ', item);


  const formBody = new FormData();
  Object.keys(item).map(key => formBody.append(key, item[key]));

  console.log('||||| made a formBody |||||');
  console.log(formBody);
  fetch('http://localhost:3001/addItem', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    //   boundary: 'XXXXX',
    // },
    body: formBody,
  }).then(response => response.json())
    .then((data) => {
      console.log('This item was stored in the database: ', data);
      console.log(dispatch(createdItem(data)));
      dispatch(fetchItemsStart());
    })
    .catch(() => dispatch(fetchError));
};

export const fetchItemsData = () => (dispatch) => {
  dispatch(fetchItemsStart());

  fetch('http://localhost:3001/allItems')
    .then(response => response.json())
    .then((data) => {
      console.log('we got the items');
      dispatch(fetchedItems(data));
    })
    .catch(() => dispatch(fetchError));
};

export const fetchSearchedItems = search => (dispatch) => {
  dispatch(fetchItemsStart());

  fetch(`http://localhost:3001/search/${search}`)
    .then(response => response.json())
    .then((data) => {
      console.log('we got the searched items');
      dispatch(fetchedItems(data));
    })
    .catch(() => dispatch(fetchError));
};

export const fetchCategoryItems = category => (dispatch) => {
  dispatch(fetchItemsStart());

  fetch(`http://localhost:3001/category/${category}`)
    .then(response => response.json())
    .then((data) => {
      console.log('we got the category items');
      dispatch(fetchedItems(data));
    })
    .catch(() => dispatch(fetchError));
};

// export const searchStart = query => ({
//   type: types.SEARCH,
//   payload: query
// });

// export const login = data => ({
//   type: types.LOGIN,
//   payload: data
// });
