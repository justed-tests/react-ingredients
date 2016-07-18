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
    let divStyle = {
      marginTop: 10
    }

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-sm-9">
                  <input type="text" className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
            <List items={this.state.items} />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ListManager
