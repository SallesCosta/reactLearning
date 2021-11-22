import { expect } from "chai" 
import div from './div'

it('div should be a function', () => {
    expect(div).to.be.a('function')
})

it('div(10, 2) should be 5', () => {
    expect(div( 10,2 )).to.be.equal(5)
})