$(document).ready(() => {
  // On arrow click, Slide down this element.
  $(".arrow-icon").on('click', () => {
    if ($('.new-tweet').css('display') === 'none') {
      window.scrollTo(0, 0);
      $(".new-tweet").slideDown();
      $('#tweet-text').focus();
      return;
    }
    if ($(".new-tweet").css('display') === 'block') {
      return $(".new-tweet").slideUp();
    }
  });
});
