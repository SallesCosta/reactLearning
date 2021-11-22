### Dependencies
npm i --save-dev jest-cli@21 chai babel-core babel-jest@21 babel-preset-es2015 babel-preset-stage-0




.babelrc
{
    "presets": [
        "es2015",
        "stage-0"
    ]
}




sum.js
// ES5
module.exports = () => {}


// ES6
// export default sum = () => {}



sum.test.js
// ES5
const expect = require('chai')
const sum = require('./sum')

//// ES6
// import { expect } from 'chai'
// import sum from './sum'
// it('teste de verificação', () => {
//     expect(sum).to.is.a('function')
// }) 



package.json

{
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "npm test -- --watch"
  },
  "devDependencies": {
    "chai": "^4.3.4",
    "jest-cli": "^27.3.1"
  }
}


python -m SimpleHTTPServer 8000