Comments = React.createClass({
  submitComment(event) {
    event.preventDefault();
    var comment = ReactDOM.findDOMNode(this.refs.comment).value.trim();
    this.props.postComment(comment);
  },
  render() {
    return (
      <form onSubmit={this.submitComment}>
        <input type="text" ref="comment" placeholder="Reply To..." />
        <button type="submit">Comment</button>
      </form>
    )
  }
})
