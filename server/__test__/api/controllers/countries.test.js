const should = require('should'),
    request = require('supertest'),
    app = require('../../../src/app');




describe('GET /names', () => {
    test('It should responds with JSON Array', () => {
        return request(app)
            .get('/names')
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
            });
    });
});

