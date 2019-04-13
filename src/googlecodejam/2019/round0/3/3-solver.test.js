const getTwoPrimeFactorsOfProduct = require('./3-solver').getTwoPrimeFactorsOfProduct;
const isSquareOfPrimeNumber = require('./3-solver').isSquareOfPrimeNumber;
const primes = require('./3-solver').primes;
const solveSingleCase = require('./3-solver').solveSingleCase;

describe('1', () => {

  describe('getTwoPrimeFactorsOfProduct', () => {

    it('[2, 3, 5, 7, 11, 13, 17, 19]]', () => {
      expect(getTwoPrimeFactorsOfProduct([2, 3, 5, 7, 11, 13, 17, 19], 3*19)).toEqual([3, 19]);
      expect(getTwoPrimeFactorsOfProduct([2, 3, 5, 7, 11, 13, 17, 19], 2*19)).toEqual([2, 19]);
      expect(getTwoPrimeFactorsOfProduct([2, 3, 5, 7, 11, 13, 17, 19], 7*13)).toEqual([7, 13]);
    })

    it('all possible products for first 20 prime numbers', () => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
      for (let i = 0; i < primes.length; i++) {
        const p = primes[i];
        for (let j = i + 1; j < primes.length; j++) {
          const q = primes[j];
          expect(getTwoPrimeFactorsOfProduct(primes, p*q)).toEqual([p, q]);
        }
      }
    });

  })

  describe('isSquareOfPrimeNumberSingleCase', () => {

    it('6241', () => {
      expect(isSquareOfPrimeNumber([2, 3, 5, 7], 2*2)).toEqual(2);
      expect(isSquareOfPrimeNumber([2, 3, 5, 7], 3*3)).toEqual(3);
      expect(isSquareOfPrimeNumber([2, 3, 5, 7], 7*7)).toEqual(7);
      expect(isSquareOfPrimeNumber(primes, 79*79)).toEqual(79);
      expect(isSquareOfPrimeNumber(primes, 8623*8623)).toEqual(8623);
    });

  })


  describe('solveSingleCase', () => {

    it('example problem 1', () => {
      const codes = [217,1891,4819,2291,2987,3811,1739,2491,4717,445,65,1079,8383,5353,901,187,649,1003,697,3239,7663,291,123,779,1007,3551,1943,2117,1679,989,3053]
      expect(solveSingleCase(codes, 101)).toEqual('CJQUIZKNOWBEVYOFDPFLUXALGORITHMS');
    });

    it('example problem 1, with repeated letters', () => {
      const codes = [217,1891,4819, 6241, 6241, 2291,2987,3811,1739,2491,4717,445,65,1079,8383,5353,901,187,649,1003,697,3239,7663,291,123,779,1007,3551,1943,2117,1679,989,3053]
      expect(solveSingleCase(codes, 101)).toEqual('CJQUUUIZKNOWBEVYOFDPFLUXALGORITHMS');
    });

    it('example problem 1, with repeated first letter', () => {
      const codes = [49, 217,1891,4819, 2291,2987,3811,1739,2491,4717,445,65,1079,8383,5353,901,187,649,1003,697,3239,7663,291,123,779,1007,3551,1943,2117,1679,989,3053]
      expect(solveSingleCase(codes, 101)).toEqual('CCJQUIZKNOWBEVYOFDPFLUXALGORITHMS');
    });

    it('example problem 1, with repeated first letter and last', () => {
      const codes = [49, 217,1891,4819, 2291,2987,3811,1739,2491,4717,445,65,1079,8383,5353,901,187,649,1003,697,3239,7663,291,123,779,1007,3551,1943,2117,1679,989,3053, 309, 9]
      expect(solveSingleCase(codes, 101)).toEqual('CCJQUIZKNOWBEVYOFDPFLUXALGORITHMSAA');
    });

    it('example problem 2', () => {
      const codes = [3292937,175597,18779,50429,375469,1651121,2102,3722,2376497,611683,489059,2328901,3150061,829981,421301,76409,38477,291931,730241,959821,1664197,3057407,4267589,4729181,5335543]
      expect(solveSingleCase(codes, 10000)).toEqual('SUBDERMATOGLYPHICFJKNQVWXZ');
    });

  })

})