const TWITTER_SETTINGS = Meteor.settings.twitter
var Twit = Meteor.npmRequire('twit');
var T = new Twit({
    consumer_key:         TWITTER_SETTINGS.consumer_key,
    consumer_secret:      TWITTER_SETTINGS.consumer_secret,
    access_token:         TWITTER_SETTINGS.access_token,
    access_token_secret:  TWITTER_SETTINGS.access_token_secret
});

Meteor.publish('tweets', function() {
  var self = this;
  if (self.userId) {
    try {
      const twitterId = Meteor.users.findOne(self.userId).services.twitter.id;
      var stream = T.stream('user', { user_id: twitterId });
      stream.on('tweet', function(tweet) {
        self.added('tweets', Random.id(), tweet);
      });
      self.ready();
    }
    catch (error) {
      conole.log(error);
    }
  } else {
    return self.ready();
  }
});

Meteor.methods({
  likeTweet(tweetId) {
    T.post('favorites/create', { id: parseInt(tweetId) }, function(err, data, response) {
      console.log(data)
    })
  },
  updateStatus(status) {
    T.post('statuses/update', {status: status}, function(err, data, response) {
      console.log(data)
    })
  },
  submitComment(comment, tweetId) {
    T.post('statuses/update', {status: comment, in_reply_to_status_id: tweetId}, function(err, data, response) {
      console.log(data)
    })
  }
})
