const expect = require('chai')
const sum = require('./sum')

it('teste de verificação', () => {
    expect(sum).to.is.a('function')
}) 
