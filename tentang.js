$(document).ready(function(){
    transition(false);
});

// fungsi transisi antar foto
function transition(first)
{
    // tempat menyimpan foto yang akan ditampilkan
    var src = first ? '/Picture/Danielle-DeAngelis-square-93730388f3474ca39a4d39d1c46db6a4.webp' : '/Picture/alysia-bebel-square-74c02ff5f27d4bfd984b032627b49765.webp';

    // akan memulai transisi fade out - fade in di elemen dengan id f1
    $("#f1").delay(1500).fadeOut(function() {
        $(this).attr("src",src).fadeIn(function() {
            transition(!first);
        });
    });    
}