# Twitter API using Meteor and React
Simple Meteor App that displays posts from Twitter and renders everything in React
- View posts
- Update Status
- Reply to Statuses
- Like Statuses

Uses the [Twit NPM package](https://github.com/ttezel/twit). I didn't put much effort into styling. Did it as an exercise to demonstrate what can be done with Meteor.

Demo Live at [twit-meteor.meteor.com/](http://twit-meteor.meteor.com)

To run createa a settings.json file in the root directory with the following info:
```
{
  "twitter": {
    "consumer_key":         "XXX",
    "consumer_secret":      "XXX",
    "access_token":         "XXX",
    "access_token_secret":  "XXX"
  }
}
```
Make sure to fill in the above with valid credentials from [dev.twitter.com](https://dev.twitter.com/).

Then run the app with:
```
meteor --settings settings.json
```
