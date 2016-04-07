/*====================================
Fix Menu on Mobile
======================================*/
  
$('.navbar-mobile a').on('click', function(){
$('.btn-navbar').click(); //bootstrap 2.x
$('.navbar-toggle').click() //bootstrap 3.x by Richard
});