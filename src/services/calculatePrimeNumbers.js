const calculatedPrimeNumbers = new Map();

const calculatePrimeNumbers = (number) => {
  const store = [];
  const primes = [];

  if (calculatedPrimeNumbers.has(number)) {
    return calculatedPrimeNumbers.get(number);
  }

  for (let i = 2; i <= number; i += 1) {
    if (!store[i]) {
      primes.push(i);
      for (let j = i * 2; j <= number; j += i) {
        store[j] = true;
      }
    }
  }
  calculatedPrimeNumbers.set(number, primes);
  return primes;
};

module.exports = calculatePrimeNumbers;
