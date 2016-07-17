let React = require('react')
let ListItem = require('./ListItem.jsx')

let List = React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },
  render: function () {
    let createItem = function (text, index) {
      return <ListItem text={text} key={index + text} />
    }

    return (
      <ul>
        {this.props.items.map(createItem)}
      </ul>
    )
  }
})

module.exports = List
