Tweet = React.createClass({
  postComment(comment) {
    Meteor.call('submitComment', comment, this.props.tweetId);
  },
  likeTweet() {
    Meteor.call('likeTweet', this.props.tweetId);
  },
  render() {
    return (
      <li className="single-tweet">
        {this.props.body}<br/>
        By @{this.props.screen_name} at {this.props.created_at}<br/>
        <button className="like-button" onClick={this.likeTweet}>
          Like Tweet
        </button>
        <Comments />
      </li>
    )
  }
})
