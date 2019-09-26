const express = require('express');

const router = express.Router();

const paginate = require('jw-paginate');
const calculatePrimeNumbers = require('../services/calculatePrimeNumbers');

const MAX_NUMBER_ALLOWED = 9999999;

const validate = async (req, res, next) => {
  const { number } = req.query;

  if (!number || !Number.isInteger(parseInt(number, 0))) {
    return res.status(400).send('Invalid number informed to calculate prime numbers');
  }

  if (parseInt(number , 0) > MAX_NUMBER_ALLOWED) {
    return res.status(400).send(`Number informed is greater than the maximum ${MAX_NUMBER_ALLOWED}`);
  }
  return next();
};


router.get('/primenumber', validate, (req, res) => {
  const { number } = req.query;

  const items = calculatePrimeNumbers(number);
  const page = parseInt(req.query.page, 0) || 1;
  const pageSize = parseInt(req.query.pageSize, 0) || 5;
  const pager = paginate(items.length, page, pageSize);
  const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
  return res.json({ pager, pageOfItems });
});


module.exports = router;
