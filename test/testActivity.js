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
  it('create /activity', function testPath(done) {
    request(server)
      .post('/activity')
      .expect(200, done);
  });
  it('list /activity/test', function testPath(done) {
    request(server)
      .get('/activity/test')
      .expect(200, done);
  });
  it('update /activity', function testPath(done) {
    request(server)
      .put('/activity')
      .expect(200, done);
  });
   it('delete /activity/test', function testPath(done) {
    request(server)
      .delete('/activity/1')
      .expect(200, done);
  });
});