const request = require('supertest');
const server = 'http://localhost:3001';
const app = require('../server/app');

// TODO: clean up code in this file
// TODO: refactor tests -> split expects into multiple assertions 

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        // console.log('status 200!!!!!!!!');
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  // TODO: split expects into multiple assertions
  // query that inserts something
  // query that checks the inserted value
  describe('/item/:id', () => {
    describe('GET', () => {
      it('Should get the first item ID in the items array', () => {
        expect.assertions(3);
        return request(server).get('/item/1').then(res => {
          //expect('Content-Type', /application\/json/)
          // console.log('res.body: ', res.body);
          // expect(200);
          const id = res.body[0].id;
          expect(id).toBeDefined();
          expect(id).toBe(1);
          expect(JSON.stringify(id)).toHaveLength(1);
        })
      });
    });
  });
 
  describe('/search/:item_name', () => {
    describe('GET', () => {
      it('Should get the name of the first item in the items array', () => {
        expect.assertions(3);
        return request(server).get('/search/PS4 Pro').then(res => {
          // expect('Content-Type', /application\/json/)
          // console.log('res.body: ', res.body);
          // expect(200);
          const name = res.body[0].item_name;
          expect(name).toBeDefined();
          expect(name).toBe('PS4 Pro');
          expect(name).toHaveLength(7);
        })
      });
    });
  });

  // TODO: make sure this actually returning all items in category 
  describe('/category/:category', () => {
    describe('GET', () => {
      it('Should get all items in the "entertainment" search category', () => {
        expect.assertions(2);
        return request(server).get('/category/entertainment').then(res => {
          //expect('Content-Type', /application\/json/)
          // console.log('res.body: ', res.body);
          // expect(200);
          const category = res.body[0].category;
          expect(category).toBeDefined();
          expect(category).toBe('entertainment');
        })
      });
    });
  });

  // TODO: create GET test for allItems 
  describe('/allItems', () => {
    describe('GET', () => {
      it('Should get all items', () => {
        expect.assertions(2);
        return request(server).get('/allItems').then(res => {
          const items = res.body;
          expect(items).toBeDefined();
          expect(items).toBeInstanceOf(Array);
          // obscenely hard-coded
          // expect(items).toHaveLength(12);
        })
      });
    });
  });

  // const mockCreateItem = (item) => {
  //   const formBody = Object.keys(item).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(item[key])).join('&');

  //   console.log(formBody);
  //   fetch('http://localhost:3001/addItem', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //     },
  //     body: formBody
  //   }).then(response => response.json())
  //     .then(data => {
  //       console.log('This item was stored in the database: ', data);
  //       // dispatch(fetchedItems(data));
  //     })
  //     .catch((err) => console.log(err));
  // }

  // describe('/addItem', () => {
  //   describe('POST', () => {
  //     it('Should add item to db', () => {
  //       // expect.assertions(1);

  //       return request(server).post('/addItem').then(res => {
  //        //expect(200)
  //       const mockItem = {

  //       }
  //       mockCreateItem()
  //         // const item = res.body;
  //         // expect(items).toBeDefined();
  //       }).catch(err => console.log(err))
  //     });
  //   });
  // });

    // describe('Test the item ID route', () => {
    //   test('It should get the item ID', () => {
    //     return request(app)
    //       .get('/item/1')
    //       .then(response => {
    //         expect(response.status).toBe(200);
    //   })
    // });
  //});

  // add more tests here...
});