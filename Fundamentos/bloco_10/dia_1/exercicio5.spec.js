const encode = require('./exercicio5');

describe('Testing required tests for encode funtion', () => {
    it('tests if encode its defined', () => {
        expect(encode).toBeDefined();
    });
    it('tests if the imported encode its a function', () => {
        expect(typeof encode).toBe('function');
    });
    it('tests if the return of encode("a, e, i, o, u") its 1, 2, 3, 4 e 5', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });
    it("tests if the others letters and numbers aren't converted", () => {
        expect(encode('t, e, s, t, e')).toBe('t, 2, s, t, 2');
    });
    it("tests if the others letters and numbers aren't converted", () => {
        expect(encode('drugs')).toBe('dr5gs');
    });
    it('tests the quantity of received and returned caracters', () => {
        expect(encode('drugs').length).toBe(5);
    });
})