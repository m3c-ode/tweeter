/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
const createTweetElement = (tweetObj) => {
  return `<article class="tweet-container">
    <header class="tweet-header">
      <div class="name-image">
        <img src="${tweetObj.user.avatars}" alt="avatar" />
        <span class="user-name">${tweetObj.user.name}</span>
      </div>
      <span class="user-tag">${tweetObj.user.handle}</span>
    </header>
    <p>${tweetObj.content.text}</p>
    <!-- <br> -->
    <footer>
    <div>${timeago.format(tweetObj.created_at)}</div>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>

    </footer>
  </article>`;
};

const renderTweets = function(tweetsDataArray) {
  console.log("🚀 ~ file: client.js:56 ~ renderTweets ~ tweetsDataArray:", tweetsDataArray);
  for (const tweet of tweetsDataArray) {
    const $tweet = createTweetElement(tweet);

    // TODO: renders reversely, why?
    // $(".new-tweet").after($tweet);

    $("#tweets-container").append($tweet);
  }
};

$(document).ready(function() {
  const loadTweets = function() {
    $.ajax("/tweets", { method: 'GET' })
      .then(tweets => {
        console.log('tweets from get tweets', tweets);
        renderTweets(tweets);
      });
  };
  loadTweets();

});