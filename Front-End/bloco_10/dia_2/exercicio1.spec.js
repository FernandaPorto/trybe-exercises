const uppercase = require('./exercicio1');

describe('Testing the uppercase funtion', () => {
    it('tests the the existence of the function', () => {
        expect(uppercase).toBeDefined();
    });
    it('tests the the type of the uppercase', () => {
        expect(typeof uppercase).toBe('function');
    });   
    it('tests the return of the function', (done) => {
        uppercase('fernanda', (str) => {
          expect(str).toBe('FERNANDA');
          done();
        });
      });
})