const myRemoveWithoutCopy = require('./exercicio3');

describe('tests if the array returned has its secound parameter value removed', () => {
    it('tests if the return of myRemove([1, 2, 3, 4], 3) is [1, 2, 4]', ()=> {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('tests if the return of myRemove([1, 2, 3, 4], 3) not to be [1, 2, 3, 4]', ()=> {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3 , 4]);
    });
    it('verifys if the array passed as parameter didnot changed', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    });
    // Verificar a exatidão do nº 3!!
    it('tests if the return of myRemove([1, 2, 3, 4], 5) not to be [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
})
