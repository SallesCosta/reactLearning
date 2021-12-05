import { expect } from 'chai';
import { every } from './every';

it('Every should be a function', () => {
    expect(every).to.be.a ('function')
})

it('every([], (item) => item) should return true', () => {
    expect(every([], (item) => item)).to.be.ok
})
