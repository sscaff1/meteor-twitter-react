UpdateStatus = React.createClass({
  updateStatus() {
    event.preventDefault();
    var status = ReactDOM.findDOMNode(this.refs.newStatus).value.trim();
    Meteor.call('updateStatus', status);
  },
  render() {
    return (
      <form onSubmit={this.updateStatus}>
        <input type="text" ref="newStatus" placeholder="Update Your Status"/>
        <button type="submit">Update Status</button>
      </form>
    )
  }
})
