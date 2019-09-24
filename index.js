const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/:number', (req, res) => {
    const number = req.params.number
    function primeNumbersList (number) {
        let store  = [], i, j, primes = [];
        for (i = 2; i <= number; ++i) {
            if (!store [i]) {
                primes.push(i);
                for (j = i << 1; j <= number; j += i)
                {
                    store[j] = true;
                }
            }
        }
        return primes;
    }
    const result = primeNumbersList(number);
    res.send(result)
})
app.listen(port, () => console.log(`listening on port ${port}!`))