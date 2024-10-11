$(document).ready(function () {

  // inisialisasi. Berguna untuk pindah lokasi. Ini berguna untuk jika di klik gambar maka akan pergi ke web lain
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

  // batas 

  // jika diarahkan ke tempat yang memiliki class menu maka akan keluar tooltip
  $('.menu-item').tooltip({
      track: true
  });
  // batas

  //jika diklik maka keluar sebuah dialog pada jquery dengan effect blind dan slideUp dengan durasi 1000 atau 1 detik

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

  // jika di click maka keluar dialog
  $('.coming').on('click', function() {
      $('.dialog').dialog("open");
  });

  // batas


  // akan mengloop untuk mencari resep yang sesuai dengan query yang dimasukan
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

        // menampilkan resep yang dicari di query dan yang lain akan di hide
        if (hasVisibleItem) {
            $(this).prev('h1').show();
            $(this).show();
        } else {
            $(this).prev('h1').hide();
            $(this).hide();
        }
    });

    // kalau ga ketemu resepnya
    if (!found) {
        $('#no-result').show();
    } else {
        $('#no-result').hide();
    }
});

});
