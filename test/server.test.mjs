import { describe, it, before, after } from 'mocha';
import http from 'http';
import dotenv from 'dotenv';
import app from '../server/server.js';
import * as chai from 'chai';
import chaiHttp from 'chai-http';

dotenv.config({ path: './server/config.env' });

chai.use(chaiHttp);
const { expect } = chai;

let server;

before((done) => {
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

    it('should store generated recipes successfully', (done) => {
        chai.request(app)
            .post('/api/server/generated-recipes')
            .send({ recipes: [{ 'result-id': 1, name: 'Recipe 1' }] })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message', 'Recipes stored successfully');
                done();
            });
    });

    it('should return stored generated recipes', (done) => {
        chai.request(app)
            .get('/api/server/generated-recipes')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('generatedRecipes').that.is.an('array').with.lengthOf(1);
                done();
            });
    });

    it('should return a specific recipe by resultId', (done) => {
        chai.request(app)
            .get('/api/server/generated-recipes/1')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('name', 'Recipe 1');
                done();
            });
    });

    it('should return 404 for a non-existent recipe', (done) => {
        chai.request(app)
            .get('/api/server/generated-recipes/999')
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.have.property('error', 'Recipe not found');
                done();
            });
    });

    it('should clear generated recipes', (done) => {
        chai.request(app)
            .delete('/api/server/generated-recipes')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('generatedRecipes').that.is.an('array').with.lengthOf(0);
                done();
            });
    });
});