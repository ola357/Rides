/* const request  = require('supertest');// app  =require('../index')
describe('homepage' , function() {
    it("welcomes the user", function (done) {
  request(app).get("/")
  .expect(200)
  .expect('Hello Olaoluwa', done)
    });
}); */

/*var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
*/
const rides = require ('../models/rides');

const chai = require('chai');
const { expect } = require('chai');

chai.use(require('chai-http'));

const app = require('../index.js'); // Our app

describe('API Endpoint /rides', () => {
  // GET - List all rides
  it('should return all rides', (done) => {
    chai.request(app)
      .get('/api/v1/rides')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // POST - Create a new Ride
  it('should post a new ride', () => {
    const ride = {
      id: rides.length + 1,
      driver: 'Paul Freddy',
      location: 'Yaba',
      destination: 'Ikoyi',
      date: new Date(),
      time: new Date().toLocaleTimeString(),
    };
    return chai.request(app)
      .post('/api/v1/rides')
      .send(ride)
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  // GET - Get the details of a specific ride
  it('should get a specific ride offer', (done) => {
    chai.request(app)
      .get('/api/v1/rides/1')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.a.property('driver');
        done();
      });
  });

  // POST - make a request to join a specific ride
  it('should make a request to join a ride offer', (done) => {
    chai.request(app)
      .post('/api/v1/rides/1/requests')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  // PUT - update a ride offer
  it('should update a ride offer', () => {
    const ride = {
      destination: 'Ikoyi',
    };
    return chai.request(app)
      .put('/api/v1/rides/1')
      .send(ride)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  // DELETE - delete a ride offer
  it('should delete a new ride', () => {
    return chai.request(app)
      .delete('/api/v1/rides/3')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });
});