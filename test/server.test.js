const { describe, it, before, after } = require('mocha');
const http = require('http');
const app = require('../server/server');
const recipeRoutes = require('../routes/recipes');
const serverRoutes = require('../routes/server');

let chai;
let expect;
let dotenv;

before(async () => {
    chai = await import('chai');
    dotenv = await import('dotenv');

    expect = chai.expect;

    // Load environment variables from config.env
    dotenv.config({ path: './server/config.env' });
});

let server;

before((done) => {
    // Listen to the server on another port to avoid conflict with the main server
    server = app.listen(5001, () => {
        console.log('Test server running on port 5001');
        done();
    });
});

after((done) => {
    if (server) {
        server.close(() => {
            console.log('Test server stopped');
            done();
        });
    } else {
        done();
    }
});

describe('Server', () => {
    it('should start the server successfully', (done) => {
        http.get('http://localhost:5001/api/server', (res) => {
            expect(res.statusCode).to.equal(200);
            done();
        }).on('error', (err) => {
            done(err);
        });
    });

    it('should access the /api/recipes route', (done) => {
        http.get('http://localhost:5001/api/recipes', (res) => {
            expect(res.statusCode).to.equal(200);
            done();
        }).on('error', (err) => {
            done(err);
        });
    });
});