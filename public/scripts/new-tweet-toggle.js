$(document).ready(() => {
  // On arrow click, Slide down this element.
  $(".arrow-icon").on('click', () => {
    if ($('.new-tweet').css('display') === 'none') {
      $(".new-tweet").slideDown();
      $('#tweet-text').focus();
      return;
    }
    if ($(".new-tweet").css('display') === 'block') {
      return $(".new-tweet").slideUp();
    }
  });
});
