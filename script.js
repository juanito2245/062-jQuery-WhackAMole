$(".whack1").click(function(){
    $(".mole1").toggle();
});
    
$(".whack2").click(function(){
    $(".mole-two").toggle();
});
    
$(".whack3").hover(function(){
    $(".third-mole").toggle();
});

$(".reset").click(function(){
    $("img").show();
});

$(".reset").click(function(){
    $(".yard").show();
});
$(".clear").click(function(){
    $(".yard").hide();
});