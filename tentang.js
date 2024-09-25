$(document).ready(function(){
    transition(false);
});

function transition(first)
{
    var src = first ? '/Picture/Danielle-DeAngelis-square-93730388f3474ca39a4d39d1c46db6a4.webp' : '/Picture/alysia-bebel-square-74c02ff5f27d4bfd984b032627b49765.webp';


    $("#f1").delay(1500).fadeOut(function() {
        $(this).attr("src",src).fadeIn(function() {
            transition(!first);
        });
    });    
}