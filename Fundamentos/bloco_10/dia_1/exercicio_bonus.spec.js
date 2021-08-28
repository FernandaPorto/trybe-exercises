const searchEmployee = require('./exercicio_bonus');

describe('Testing the required requisits for the bonus exercise using TDD concept', () => {
    it('tests the existence of the funtion', () => {
        expect(searchEmployee).toBeDefined();
    });
    it('tests if its a funtion', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('tests the employee returned by the search funtion', () => {
        expect(searchEmployee('4456-4', 'firstName')).toEqual('Leila');
    });
    it('tests if throws an ERROR when the id its not on data base', () => {
        expect(() => { searchEmployee('1234-5') }).toThrow();
    });
    it('tests if the ERROR massege is:"ID não identificada"', () => {
        expect(() => { searchEmployee('1234-5') }).toThrowError(new Error ('ID não identificada'));
    });
    it('tests if throws an ERROR when the detail its not on data base', () => {
        expect(() => { searchEmployee('9852-2-2', 'teste') }).toThrow();
    });
    it('tests if the ERROR massege is:"ID não identificada"', () => {
        expect(() => { searchEmployee('9852-2-2', 'teste') }).toThrowError(new Error ('Informação indisponível'));
    });
    
})