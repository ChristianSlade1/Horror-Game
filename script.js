$(".selectA").click(function() {
    $(".all1").fadeOut();
    $(".all2").delay(500).fadeIn(400);
});
//#2
$(".selectB").click(function() {
    $(".all2").fadeOut();
    $(".eye").delay(5000).show(1).delay(49).hide(1);
    $(".all3").delay(7000).fadeIn(400);
});
$(".select1B").click(function() {
    $(".all2").fadeOut();
    $(".all4").delay(500).fadeIn(400);
    $(".garden1").delay(500).fadeIn(400);
});
$(".selectC").click(function() {
    $(".all4").fadeOut();
    $(".garden").fadeOut();
    $(".deathtext").delay(3000).fadeIn(500);
    $(".deathtext1").delay(4000).fadeIn(500);
    var audio=document.getElementById("goofy");
    audio.src="https://audio.jukehost.co.uk/8NaJP45gxeVANvdzQS2DzVBaeu8iDIsc";  
    audio.play();
});




