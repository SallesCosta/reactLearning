//aqui é o entryPointe que RECEBE/IMPORTA as funções dos outros arquivos
//import { render } from 'react-dom' //shortHand not ation
//var Title = require('./app')  //padrão CommonJS
'use strict'

import React from 'react'    //padrão EcmaScript2015
import ReactDOM from 'react-dom' //padrão EcmaScript2015
import Title from './app.js' //padrão EcmaScript2015


ReactDOM.render(          //se fosse usar shortHand notation... essa linha ficaria apenas '  render(   '
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)
