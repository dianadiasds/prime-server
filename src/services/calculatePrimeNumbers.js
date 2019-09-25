const calculatedPrimeNumbers = new Map();

const calculatePrimeNumbers = (number) => {
    let store = [];
    let primes = [];

    if (calculatedPrimeNumbers.has(number)) {
        return calculatedPrimeNumbers.get(number);
    }

    for (let i = 2; i <= number; ++i) {
        if (!store [i]) {
            primes.push(i);
            for (let j = i << 1; j <= number; j += i) {
                store[j] = true;
            }
        }
    }
    calculatedPrimeNumbers.set(number, primes);
    return primes;
};

module.exports = calculatePrimeNumbers