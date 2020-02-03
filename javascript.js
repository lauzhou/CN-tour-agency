$(document).ready(function() {
 
 
   $("a.menu").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });
 
 $("a.up").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });

 	$("a.down").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });
 
});