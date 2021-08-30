//aqui é o entryPointe que RECEBE/IMPORTA as funções dos outros arquivos
'use strict'

import React from 'react'    //padrão EcmaScript2015
import ReactDOM from 'react-dom' //padrão EcmaScript2015
//import { render } from 'react-dom' //shortHand notation
import Title from './app.js' //padrão EcmaScript2015
//var Title = require('./app')  //padrão CommonJS


ReactDOM.render(          //se fosse usar shortHand notation... essa linha ficaria apenas '  render(   '
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)
