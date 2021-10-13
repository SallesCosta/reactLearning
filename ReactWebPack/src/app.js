// aqui é um módulo.. daqui eu exporto as funções para o entryPoint
'use strict'

var React = require('react')

var Title = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'Título')
  }
})

export default Title 