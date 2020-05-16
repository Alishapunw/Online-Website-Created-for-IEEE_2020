$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
   })
      
   
   $(document).ready(function() {
     $(window).scroll(function() {
       if($(this).scrollTop() < 100){
          $("#navbar").removeClass("bg-dark");
       }
       else{
          $("#navbar").addClass("bg-dark");
       }
     });
   });