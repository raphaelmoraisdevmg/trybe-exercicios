const myRemove = require('./myRemove.js');
describe('testando os retornos da funcção myRemove',() => {
    it(" testando se a função retorna o array correto.",() => {
    expect(myRemove([1, 2, 3, 4],3)).toEqual([1,2,4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    it(" testando se a função não retorna o array errado.",() => {
        expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1,2,3,4]);
    });
});