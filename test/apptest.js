var request  = require('supertest')
 , app  =require('../index')
describe('homepage' , function() {
    it("welcomes the user", function (done) {
  request(app).get("/")
  .expect(200)
  .expect(/Hello Olaoluwa/, done)
    })
})