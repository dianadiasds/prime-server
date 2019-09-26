const express = require('express');
const request = require('supertest');
const primenumber = require('./primenumber');

const app = express();
app.use(primenumber);

describe('should return 200', () => {
  it('when a valid number and pageSize is specified', (done) => {
    request(app)
      .get('/primenumber?number=100&pageSize=7')
      .expect(200, done);
  });

  it('when a valid number and a missing page', async (done) => {
    const response = await request(app).get('/primenumber?number=30');
    expect(response.statusCode).toBe(200);

    // Expect the default number
    expect(response.body.pager.pageSize).toEqual(5);
    done();
  });

  it('for a specified page', async (done) => {
    const response = await request(app).get('/primenumber?number=17&pageSize=2&page=3');
    expect(response.statusCode).toBe(200);

    // Expect the default number
    const expectedItens = [11, 13];
    expect(response.body.pageOfItems).toStrictEqual(expectedItens);
    done();
  });
});

describe('should return 400', () => {
  it('when missing number', async (done) => {
    const response = await request(app).get('/primenumber?pageSize=5');
    expect(response.statusCode).toBe(400);
    expect(response.text).toStrictEqual('Invalid number informed to calculate prime numbers');
    done();
  });

  it('when not a number informed', async (done) => {
    const response = await request(app).get('/primenumber?number=abc&pageSize=5');
    expect(response.statusCode).toBe(400);
    expect(response.text).toStrictEqual('Invalid number informed to calculate prime numbers');
    done();
  });

  it('when number is greater than maximum allowed', async (done) => {
    const response = await request(app).get('/primenumber?number=100000000&pageSize=5');
    expect(response.statusCode).toBe(400);
    expect(response.text).toStrictEqual('Number informed is greater than the maximum 9999999');
    done();
  });
});
