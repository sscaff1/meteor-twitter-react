Home = React.createClass({
  mixins: [ReactMeteorData],
  startMeteorSubscriptions() {
    return Meteor.subscribe('tweets');
  },
  getMeteorData() {
    let sub = this.startMeteorSubscriptions();
    let tweets = Tweets.find({}, {sort: {created_at: -1}}).fetch();
    let hasTweets;
    if (tweets.length > 0) {
      hasTweets = true
    } else {
      hasTweets = false;
    }
    return {
      subReady: sub.ready(),
      currentUser: Meteor.user(),
      tweets: tweets,
      hasTweets: hasTweets
    }
  },
  renderTweets(tweet) {
    let formattedTime = moment(tweet.created_at, 'ddd MMMM DD HH:mm:ss ZZ YYYY').format('ddd, MMM Do YYYY, h:mm:ss a')
    return <Tweet
      key={tweet.id}
      tweetId={tweet.id}
      body={tweet.text}
      screen_name={tweet.user.screen_name}
      created_at={formattedTime}
    />
  },
  renderLoggedIn() {
    var CSSTransitionGroup = React.addons.CSSTransitionGroup;
    return (
      <div>
        <h2 className="welcome-user">Welcome {this.data.currentUser.profile.name}</h2>
        <UpdateStatus />
        {this.data.hasTweets ?
        <ul className="tweet-list">
          <CSSTransitionGroup
            component="div"
            transitionName="tweet"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
          {this.data.tweets.map(this.renderTweets)}
          </CSSTransitionGroup>
        </ul>
        : <h4>Tweets are coming your way!</h4>}
      </div>
    )
  },
  render() {
    return (
      <div className="container">
        <div className="welcomeMessage">
        {
          this.data.currentUser ?
          this.renderLoggedIn() :
          <h2>Login to See Your Twitter Feed</h2>
        }
        </div>
        <AccountsUISpan />
      </div>
    )
  }
});
