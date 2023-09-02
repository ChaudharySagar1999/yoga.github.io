$(document).ready(function(){

    $("i.fa-solid.fa-bars").click(function(){
        $("#nav").toggleClass('mob_opened');  

    });

    $(window).resize(function(){
        if ( $(window).innerWidth()>768){
            $("#nav").removeAttr("style");
        }
    });


  $(window).scroll(function(){

    if( $(window).scrollTop()>=50){
        $(".navbar").addClass("sticky");

    }
    else{
        $(".navbar").removeClass("sticky");
    }

  });






});