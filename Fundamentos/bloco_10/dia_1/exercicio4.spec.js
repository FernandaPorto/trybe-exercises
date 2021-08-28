const myFizzBuzz = require('./exercicio4');

describe('Testing the FizzBuzz function', () => {
    it('tests the return of a number divisible by 3 and 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('tests the return of a number divisible only by 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('tests the return of a number divisible only by 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('tests the return of a number that its not divisible per both numbers', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('tests if the return of a parameter the its not number is falsy', () => {
        expect(myFizzBuzz('7')).toBeFalsy();
    });
})