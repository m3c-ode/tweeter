$(document).ready(() => {
  $("#toggle-top").on('click', function() {
    document.getElementById('tweets-container').scrollIntoView();
    $("#tweet-text").focus();
    return false;
  });
});