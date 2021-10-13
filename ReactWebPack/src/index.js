//aqui é o entryPointe que RECEBE/IMPORTA as funções dos outros arquivos
//import { render } from 'react-dom' //shortHand notation
//var Title = require('./app')  //padrão CommonJS
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Title from './app.js'


ReactDOM.render(          //se fosse usar shortHand notation... essa linha ficaria apenas '  render(   '
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)
