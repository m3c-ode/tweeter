// console.log("Hello from char counter");
$(document).ready(function() {
  // --- our code goes here ---
  console.log("another hello");
  $("#tweet-text").on("input", function(event) {
    const inputLength = $(this).val().length;
    const remainingChar = 140 - inputLength;
    const counterElem = $(this).closest("form").find("output.counter");
    counterElem.text(remainingChar);

    // adds color if negative
    if (remainingChar < 0) {
      counterElem.css("color", "red");
    } else {
      // removes added color
      counterElem.css("color", "");
    }
  });
});
