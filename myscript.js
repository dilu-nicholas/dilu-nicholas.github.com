$(function() {
    $( "#selectable" ).selectable();
  });

$(document).ready(function() {
		$('.myMenu > li').bind('mouseover', openSubMenu);
		$('.myMenu > li').bind('mouseout', closeSubMenu);
		cancel: 'a'
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		};
		cancel: 'a'
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');
		};
				   
	});

$(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
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

$(function() {
    $( "#accordion" ).accordion();
  });

$(function() {
    var state = true;
    $( "#button" ).click(function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  });
