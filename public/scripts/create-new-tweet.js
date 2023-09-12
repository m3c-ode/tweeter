$(document).ready(function() {
  $("form").on('submit', function(event) {
    event.preventDefault();
    const textArea = this.elements.text;
    console.log("🚀 ~ file: create-new-tweet.js:5 ~ $ ~ textArea:", textArea.value);
    console.log($(this).serialize());
    const formBody = $(this).serialize();
    $.ajax("/tweets", {
      method: 'POST',
      data: formBody,
      success: function(args) {
        console.log('ehlloe', args);
      },
      error: function(err) {
        console.log('error', error);
      }
    })
      .then((data) => {
        console.log('data sent', data);
        // console.log(success);
      });


  });

});