var request = require('supertest');
describe('Loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../index.js');
  });
  afterEach(function () {
    //server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('signup post /auth/signup', function testPath(done) {
    request(server)
      .post('/auth/signup')
      .expect(200, done);
  });
  it('login post /auth/login', function testPath(done) {
    request(server)
      .post('/auth/login')
      .expect(200, done);
  });
  it('update /auth', function testPath(done) {
    request(server)
      .put('/auth')
      .expect(200, done);
  });
   it('delete /auth', function testPath(done) {
    request(server)
      .put('/auth')
      .expect(200, done);
  });
});