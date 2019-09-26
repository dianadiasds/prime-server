# Prime Number - Server

[![codecov](https://codecov.io/gh/dianadiasds/prime-server/branch/master/graph/badge.svg)](https://codecov.io/gh/dianadiasds/prime-server)
[![Build Status](https://travis-ci.org/dianadiasds/prime-server.svg?branch=master)](https://travis-ci.org/dianadiasds/prime-server)
### Project Structure

The project was developed using Node.

### Project CI/CD 
This project is integrated with Heroku. Every push to the `master` branch triggers the Heroku CI/CD and makes a new deploy.
This project is currently deployed and available in: [prime-server](https://prime-server.herokuapp.com)

## Badges
This project is integrated with Codecov. This tool provides a detailed report of the project test coverage.
    
### Frameworks and libraries used

- Express: to expose the REST services
- Cors: to allow different host to consume the exposed service
- Jw-pagination: to calculate the amount of page and the amount of items per page
- Jest: used to execute the tests and get the coverage
- Supertest: To test the service exposed (testing the response code and contract) 
- ESlint: to validate the code style/formatting

### Endpoint
There's only 1 service exposed on this App and this service contains 3 query parameters:
- (REQUIRED) number: the last number (begining from 2) to retrieve the prime numbers
- (OPTIONAL) pageSize: the size of the pagination. This will define how many numbers will be returned by page.
- (OPTIONAL) page: the page desired.

For example, to get the 2 itens of the third page of the prime number from 0 to 10

- (GET) [prime-server-10-items](https://prime-server.herokuapp.com/primenumber?number=10&pageSize=2&page=3)

### How to start this project locally
```sh 
npm run start
```
It will start the node server on the port `5000`
### How to execute the eslint, tests and get the coverage
```sh 
npm run test
```
After executing the previous command, it will be generated an `index.html` file inside the folder `./coverage/lcov-report`
Opening it inside any browser will display details about the test coverage.


