const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Title = require('./components/title')
 
const TitleComponent = ReactDOMServer.renderToStaticMarkup(React.createElement(Title))

console.log(TitleComponent)