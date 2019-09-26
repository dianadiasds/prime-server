const calculatePrimeNumbers = require('./calculatePrimeNumbers');

describe('prime numbers', () => {
  describe('return prime numbers', () => {
    it('when a number is informed', () => {
      const given = 13;

      const actual = calculatePrimeNumbers(given);

      const expectedPrimeReturned = [2, 3, 5, 7, 11, 13];
      expect(actual).toStrictEqual(expectedPrimeReturned);
    });

    it('when is already on the Map ', () => {
      const given = 13;

      const actual = calculatePrimeNumbers(given);
      const actual2 = calculatePrimeNumbers(given);

      expect(actual).toStrictEqual(actual2);
      expect(actual).toStrictEqual([2, 3, 5, 7, 11, 13]);
    });
  });

  describe('not return prime number', () => {
    it('when the prime numbers is 1', () => {
      const given = 1;

      const actual = calculatePrimeNumbers(given);

      const expected = [];
      expect(actual).toStrictEqual(expected);
    });

    it('when is not a number', () => {
      const given = 'a';

      const actual = calculatePrimeNumbers(given);

      const expected = [];
      expect(actual).toStrictEqual(expected);
    });

    it('when a negative number', () => {
      const given = -10;

      const actual = calculatePrimeNumbers(given);

      const expected = [];
      expect(actual).toStrictEqual(expected);
    });

    it('when a non integer number', () => {
      const given = 1.6;

      const actual = calculatePrimeNumbers(given);

      const expected = [];
      expect(actual).toStrictEqual(expected);
    });
  });
});
