const myFizzBuzz = require('./fizBuzz.js');
describe('testa a função myFizzBuzz', () => {
    it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz('5')).toBe(false);
    });
});