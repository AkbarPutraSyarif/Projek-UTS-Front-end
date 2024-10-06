$(document).ready(function () {
  const linkResep = [
      { imgId: '#vegan1', href: '/resep/vegan1.html' },
      { imgId: '#kalori1', href: '/resep/kalori1.html' },
      { imgId: '#lemak1', href: '/resep/lemak1.html' },
      { imgId: '#vitamin1', href: '/resep/vitamin1.html' },
      { imgId: '#gluten1', href: '/resep/gluten1.html' },
      { imgId: '#protein1', href: '/resep/protein1.html' }
  ];

  linkResep.forEach(function(link) {
      $(link.imgId).on('click', function() {
          window.location.href = link.href; 
      });
  });

  $('.menu-item').tooltip({
      track: true
  });

  $(".dialog").dialog({
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
      $('.dialog').dialog("open");
  });

  $('#search-btn').on('click', function() {
    const query = $('#search-box').val().toLowerCase();
    let found = false;

    $('.resep-1 .menu-list').each(function() {
        let hasVisibleItem = false;

        $(this).find('.menu-item').each(function() {
            const text = $(this).text().toLowerCase();
            
            if (text.includes(query)) {
                $(this).show();
                hasVisibleItem = true;
                found = true;
            } else {
                $(this).hide();
            }
        });

        if (hasVisibleItem) {
            $(this).prev('h1').show();
            $(this).show();
        } else {
            $(this).prev('h1').hide();
            $(this).hide();
        }
    });

    if (!found) {
        $('#no-result').show();
    } else {
        $('#no-result').hide();
    }
});

});
