const sum = require('./exercicio1');

describe('Testing required sums funtion that has 2 numbers values as parameters', () => {
    it('tests if the return of the sum 4 + 5 is 9', ()=> {
        expect(sum(4, 5)).toBe(9);
    });
    it('tests the return of 0 + 0', ()=> {
        expect(sum(0, 0)).toBe(0);
    });
    it('tests if the sum function trows an ERROR when it has string parameters', () => {
        expect(() => { sum(4 ,'5') }).toThrow();
    });
    it('tests if the ERROR message is: "parameters must be numbers"',() => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    })
})