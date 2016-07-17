let React = require('react')

let ListItem = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  render: function () {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    )
  }
})

module.exports = ListItem
