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
    $(".garden1").fadeOut();
    $(".deathtextA").delay(3000).fadeIn(500);
    $(".deathtext1").delay(4000).fadeIn(500);
    var audio=document.getElementById("goofy");
    audio.src="https://audio.jukehost.co.uk/8NaJP45gxeVANvdzQS2DzVBaeu8iDIsc";  
    audio.play();
});
$(".select1C").click(function() {
    $(".all4").fadeOut();
    $(".garden").fadeOut();
    $(".reaper1").delay(500).fadeIn(400);
    $(".all5").delay(500).fadeIn(400);
});
$(".select1D").click(function() {
    $(".all5").fadeOut();
    $(".reaper").fadeOut();
    $(".deathtextB").delay(3000).fadeIn(500);
    $(".deathtext2").delay(4000).fadeIn(500);
    var audio=document.getElementById("stab");
    audio.src="https://audio.jukehost.co.uk/DVELi7RQRvbnY0ZwBkMLIOUZSv1ea3Dl";  
    audio.play();
});
$(".selectD").click(function() {
    $(".all5").fadeOut();
    $(".reaper").fadeOut();
    $(".wintext").delay(1000).fadeIn(500);
    $(".wintext1").delay(2000).fadeIn(500);    
});
$(".select1E").click(function() {
    $(".all3").fadeOut();
    $(".deathtextC").delay(3000).fadeIn(500);
    $(".deathtext3").delay(4000).fadeIn(500);
    var audio=document.getElementById("stab");
    audio.src="https://audio.jukehost.co.uk/DVELi7RQRvbnY0ZwBkMLIOUZSv1ea3Dl";  
    audio.play();
});
$(".selectE").click(function() {
    $(".all3").fadeOut();
    $(".deathtextC").delay(3000).fadeIn(500);
    $(".deathtext3").delay(4000).fadeIn(500);
});
    



