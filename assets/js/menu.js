$(document).ready(function() {
                  
    $(".header__toggle").on("click", function(){
        
        $(".header__nav ul").toggleClass("open");
        $(".banner__tagline--mobile").toggleClass("open");
        $(".banner__tagline").toggleClass("open");

    });
    
       
});
                