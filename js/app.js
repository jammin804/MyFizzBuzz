$(document).ready(function(){
  $('button').click(function() {
    for (i = 1; i < 101; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        $('body').append("<li>fizzbuzz</li>");
      } else if (i % 3 === 0) {
        $('body').append("<li>fizz</li>");
      } else if (i % 5 === 0) {
        $('body').append("<li>buzz</li>");
      } else {
        $('body').append("<li>" + i + "</li>");
      }
    }
  });
});