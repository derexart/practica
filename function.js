$(document).ready(function() {
    /*Every time the windows  is scrolled */

    
    if($(window).width() >= 768){
        $(windows).scroll( function(){
            /*check the location of each desired element */ 
            $('.hideme').each( function(i){
                 var bottom_of_object = $(this).position().top + $(this).outerHeight();
                 var bottom_of_windows = $(windows).scrollTop() + $(windows).height();



                 /* if the object is completety visible in the windows, fade it it */ 
                 if( bottom_of_windows > bottom_of_object ){

                    $(this).removeClass('hidden');
                    $(this).addClass('animated fadeInUp');
                 }

            });

        });
    }
});