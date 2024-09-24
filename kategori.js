$(document).ready(function () {
    $('#vegan1').on('click', function() {
        window.location.href = 'vegan1.html'; 
    });

    $('.menu-item').tooltip({
        track: true
    });

    $( ".dialog" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 1000
          
        },
        hide: {
          effect: "slideUp",
          duration: 1000
        }
      });
    $('.coming').on('click', function() {
        $('.dialog').dialog("open")
    });        
});