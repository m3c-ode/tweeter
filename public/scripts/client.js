/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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
      <div>${(new Date() - tweetObj.created_at).toLocaleString()} days ago</div>
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

// const $tweet = createTweetElement(tweetData);
// console.log("🚀 ~ file: client.js:42 ~ $tweet:", $tweet);


$(document).ready(function() {

  // Test / driver code (temporary). Eventually will get this from the server.
  // $(".tweet-container").after($tweet);
  renderTweets(tweetData);



});