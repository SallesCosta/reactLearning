// test('testando jest', ()=>{})  tbm funciona igual

// describe('# ESCOPO', ()=>{
// it('testando jest', ()=>{})  
// it('testando jest2', ()=>{})  
//})


// it('titulo do teste', ()=> {
//     expect(1).toBe(1)
// })

const expect = require('chai').expect
const sum = require('./sum')
it('sum should be a function ', () => {
    typeof(sum) === 'function'
})