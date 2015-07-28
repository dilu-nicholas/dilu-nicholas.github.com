
  $(function() {
    $( "#selectable" ).selectable();
  });

$(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  });

  $(function() {
    $( "#menu" ).menu();
  });

    $(function() {
    $( "#tabs" ).tabs();
  });
 
 $(function() {
    $( "#button" ).click(function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 3000 );
    }
  });
