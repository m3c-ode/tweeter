/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

const myEscape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createErrorElement = (message) => {
  $('#form-error').find('.error-detail').text(message);
  // $('#form-error').attr("hidden", false);
  // $('#form-error').show();
  $('#form-error').slideDown();
  $('#form-error').find("button").on("click", function() {
    $('#form-error').slideUp('slow');
  });
};


const createTweetElement = (tweetObj) => {
  return `<article class="tweet-container">
    <header class="tweet-header">
      <div class="name-image">
        <img src="${tweetObj.user.avatars}" alt="avatar" />
        <span class="user-name">${tweetObj.user.name}</span>
      </div>
      <span class="user-tag">${tweetObj.user.handle}</span>
    </header>
    <p>${myEscape(tweetObj.content.text)}</p>
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
    $(".new-tweet").after($tweet);

    // $("#tweets-container").append($tweet);
  }
};

const postTweet = function(callback) {
  $("form").on('submit', function(event) {
    event.preventDefault();
    const textAreaInput = this.elements.text.value;
    console.log("🚀 ~ file: create-new-tweet.js:5 ~ $ ~ textAreaInput:", textAreaInput);
    if (textAreaInput === "") {
      // alert('Please tweet something!');
      createErrorElement('Please tweet something!');
      return;
    }
    if (textAreaInput.length > 140) {
      createErrorElement('Please keep your tweet within the limit of 140 characters!');
      return;
    }
    console.log($(this).serialize());
    const formBody = $(this).serialize();
    $.ajax("/tweets", {
      method: 'POST',
      data: formBody,
      // success: function(args) {
      //   console.log('hello', args);
      // },
      // error: function(err) {
      //   console.log('error', error);
      // }
    })
      .then((data) => {
        console.log('data sent', data);
        // console.log(success);
        // callback()
      })
      .then(() => callback());
  });
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
  postTweet(loadTweets);

});