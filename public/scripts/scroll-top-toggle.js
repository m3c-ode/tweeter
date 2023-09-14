$(document).ready(() => {
  $("#toggle-top").on('click', function() {
    console.log('clikced');
    $("#tweet-text").focus();
    return false;
  });
});