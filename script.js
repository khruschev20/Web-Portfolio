$(document).ready(function(){

$('menu').click(function(){
 $(this).toggleClass('fa-times');
 $('header').toggleClass('toggle');

 $(window).on('scroll load', function(){

 $('#menu').removeClass('fa-times');
 $('header').removeClass('toggle');

})
});
function NullError(){
  valid = true;
  if(document.NullError == ""){
    document.Write("Please fill in the empty spot");
    valid = false;
  }
  return valid();
}
