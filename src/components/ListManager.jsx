let React = require('react')
let List = require('./List.jsx')

let ListManager = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getInitialState: function () {
    return {items: [], newItemText: ''}
  },
  handleSubmit: function (e) {
    e.preventDefault()

    let currentItems = this.state.items
    currentItems.push(this.state.newItemText)

    this.setState({items: currentItems, newItemText: ''})
  },
  onChange: function (e) {
    this.setState({newItemText: e.target.value})
  },
  render: function () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
})

module.exports = ListManager
