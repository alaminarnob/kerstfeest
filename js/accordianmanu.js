$(function(){

  $("#accordian h3").click(function(){
  $("#accordian ul ul").slideUp();
    if ($(this).next().is(":hidden")){
    $(this).next().slideDown();
    }
  });
});


$('.navbar-toggler').click(function(){
    $('#accordian').slideToggle();
})