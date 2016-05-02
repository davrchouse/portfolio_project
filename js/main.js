// $(function() {
//     var state = true;
//     $( "#button" ).click(function() {
//       if ( state ) {
//         $( "#resume" ).animate({
//           width: 500
//         }, 1000 );
//       } else {
//         $( "#resume" ).animate({
//           width: 240
//         }, 1000 );
//       }
//       state = !state;
//     });
//   });

// $(function() {
//     var state = true;
//     $("#button").click(function() {
//         if ( state ) {  
//           $("p").css("display", "none");
//         } else {
//           $("p").css("display", "block");
//         }                             
//         state = !state;
//       });
//     });

$(function() {
    var state = true;
    $("#button").click(function() {
        if ( state ) {  
          $("#resume").show(100);
        } else {
          $("#resume").hide(100);
        }                             
        state = !state;
      });
    });




// $(document).ready(function(){
//     $("#button").click(function(){
//         $("p").css("display", "none");
//     });
// });



 // $(function() {
 //    // run the currently selected effect
 //    function runEffect() {
 //      // get effect type from
 //      var selectedEffect = blind;
 
 //      // most effect types need no options passed by default
 //      var options = {};
 //      // some effects have required parameters
 //      // if ( selectedEffect === "scale" ) {
 //      //   options = { percent: 0 };
 //      // } else if ( selectedEffect === "size" ) {
 //      //   options = { to: { width: 200, height: 60 } };
 //      // }
 
 //      // run the effect
 //      $( "#resume" ).hide( selectedEffect, options, 1000, callback );
 //    };
 
 //    // callback function to bring a hidden box back
 //    function callback() {
 //      setTimeout(function() {
 //        $( "#resume" ).removeAttr( "style" ).hide().fadeIn();
 //      }, 1000 );
 //    };
 
 //    // set effect from select menu value
 //    $( "#button" ).click(function() {
 //      runEffect();
 //    });
 //  });