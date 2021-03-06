const test = require('tape');
const request = require('supertest');

const app = require('../app');


test('tape is working', t => {

    t.pass();
    t.end();
});

test('testing if / endpoint has a status code 200', t => {
    request(app)
        .get('/')
        .expect(200)
        .expect('content-type', /text/)
        .end((err, res) => {
            t.error(err);
            // console.log(res)
            t.end();
        });
});


test('testing if random endpoint has a status code 404', t => {
    request(app)
        .get('/ksjdnsdnfskdnfs')
        .expect(404)
        .expect('content-type', /text/)
        .end((err, res) => {
            t.error(err);
                        t.equals(res.status, 404, 'throws 404 with a random endpoint');

            // console.log(res)
            t.end();
        });
});

test('testing if /orderhistory/Burhan has a status 200', t =>{
    request(app)
        .get('/orderhistory/Burhan')
        .expect(200)
        .end((err, res) => {
            t.equals(res.status, 200, 'status code is 200')
            t.true(res.text.includes('Burhan'), 'Burhan should be there')
            t.end()
        })
})