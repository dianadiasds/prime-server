const calculatePrimeNumbers = require('./src/services/calculatePrimeNumbers');

const express = require('express');
const app = express();

const cors = require('cors');
const middleware = cors();
app.use(middleware);

const paginate = require('jw-paginate');

const port = process.env.PORT || 5000;

app.get('/primenumber', (req, res, next) => {
    const {number} = req.query;
    const items = calculatePrimeNumbers(number);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const pager = paginate(items.length, page, pageSize);
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    return res.json({ pager, pageOfItems });
});

app.listen(port, () => console.log(`listening on port ${port}!`))