import test from 'tape';
import request from 'supertest';
import app from '../index';

const VALID_URLS = [
    'http://shop.panthers.com',
    'http://www.hobby-lobby.com',
    'http://www.enjoylifefoods.com',
    'http://www.josephturner.co.uk',
    'http://www.bedandbreakfast.com',
    'http://www.banglads.com',
    'http://www.infinityhall.com'
];
const INVALID_URL = 'invalid_url';

test('Test with valid urls', (t) => {
    t.plan(VALID_URLS.length * 3);
    for (const url of VALID_URLS) {
        request(app).get(`/categories?url=${url}`).end((err, res) => {
            t.equal(res.status, 200, `Response status 200 for url ${url}`);
            t.ok(res.body.length, `Response not empty for url ${url}`);
            t.notOk(res.error, `Without error for url ${url}`);
        })
    }

});

test('Test with invalid url', (t) => {
    t.plan(2);
    request(app).get(`/categories?url=${INVALID_URL}`).end((err, res) => {
        t.ok(res.error, 'Error exists');
        t.equal(res.error.status, 400, 'Status "Bad request"');
    })
});

test('Exit from tests', (t) => {
    t.end();
    process.exit(0);
})
