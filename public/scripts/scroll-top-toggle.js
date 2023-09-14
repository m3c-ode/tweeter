$(document).ready(() => {
  $("#toggle-top").hide();
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
      $("#toggle-top").show();
    } else {
      $("#toggle-top").hide();
    }
  });

  $("#toggle-top").on('click', function() {
    document.getElementById('tweets-container').scrollIntoView();
    $("#tweet-text").focus();
    return false;
  });
});