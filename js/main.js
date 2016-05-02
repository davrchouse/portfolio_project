$(function() {
    var state = true;
    $( "#button" ).click(function() {
      if ( state ) {
        $( "#resume" ).animate({
          width: 500
        }, 1000 );
      } else {
        $( "#resume" ).animate({
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  });