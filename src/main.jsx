let React = require('react')
let ReactDOM = require('react-dom')
let ListManager = require('./components/ListManager.jsx')

ReactDOM.render(<ListManager title={'One'} />, document.getElementById('one'))
ReactDOM.render(<ListManager title={'Two'} />, document.getElementById('two'))
ReactDOM.render(<ListManager title={'Three'} headingColor="#b31217" />, document.getElementById('three'))
