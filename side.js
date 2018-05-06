//seperate js file needed for side pages as firebase was interfering with them before
// nav linking to sections of the homepage scroll

$(document).ready(function() {
    $('nav ul a').click(function(e) {
        var linkHref = $(this).attr('href');
        console.log(linkHref);
        var headerHeight = $('nav').outerHeight();
        $('html, body').animate({
            //scrollTop: $(linkHref).offset().top - headerHeight
            scrollTop: $(linkHref).offset().top
        },500)
        
        e.preventDefault();
    });
});

//Toggle menu with click
$(document).ready(function() {
    
    $(".menu-icon").on("click", function() {
        //$('.menu-icon').css({"color":"red"});
        $("nav ul").toggleClass("showing");
    });
});

//Scroll down menu in mobile view
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
});


// scroll back to the top with the tedx logo for homepage
jQuery(document).ready(function() {      
    jQuery('.logo').click(function(event) {
        event.preventDefault();
        
        jQuery('html, body').animate({scrollTop: 0}, 500);
        return false; 
    })
     
});

// scroll back to the top with an arrow for side pages
jQuery(document).ready(function() {
    var offset = 250;     
    var duration = 300;     
    jQuery(window).scroll(function() {     
        if (jQuery(this).scrollTop() > offset) {     
            jQuery('.back-to-top').fadeIn(duration);     
        } 
        else {     
            jQuery('.back-to-top').fadeOut(duration);     
        }     
    });
 
    jQuery('.back-to-top').click(function(event) {     
        event.preventDefault();     
        jQuery('html, body').animate({scrollTop: 0}, duration);     
        return false;
        })
    });