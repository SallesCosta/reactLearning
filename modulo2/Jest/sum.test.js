const expect = require('chai').expect
const sum = require('./sum')

// import chai from 'chai'
// import { sum } from './sum'


// describe('#ESCOPO', () => {
//     it('testando Jest', () => {})
//     it('testando Jest2', () => {})
// })

// it('um é igual a 1', ()=> {
//     console.assert(1===2, '1 não é igual a 2')
// })


// it('um é igual a 1', ()=> {
//     expect(1).toBe(2)
// })

it('sum should be a function', () =>{
    expect(sum).to.be.a('function')
} )