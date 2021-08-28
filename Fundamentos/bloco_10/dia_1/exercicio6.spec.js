const decode = require('./exercicio6');

describe('Testing required tests for encode funtion', () => {
    it('tests if decode its defined', () => {
        expect(decode).toBeDefined();
    });
    it('tests if the imported encode its a function', () => {
        expect(typeof decode).toBe('function');
    });
    it('tests if the return of encode("a, e, i, o, u") its 1, 2, 3, 4 e 5', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });
    it("tests if the others letters and numbers aren't converted", () => {
        expect(decode('t, 2, s, t, 2')).toBe('t, e, s, t, e');
    });
    it("tests if the others letters and numbers aren't converted", () => {
        expect(decode('dr5gs')).toBe('drugs');
    });
    it('tests the quantity of received and returned caracters', () => {
        expect(decode('dr5gs').length).toBe(5);
    });
})