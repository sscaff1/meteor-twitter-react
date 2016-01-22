App = React.createClass({
  render() {
    return (
      <div className="app-root">
        {this.props.header}
        <div className="container">
          {this.props.yield}
        </div>
        {this.props.footer}
      </div>
    );
  }
});
