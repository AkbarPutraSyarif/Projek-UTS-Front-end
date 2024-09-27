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
});
