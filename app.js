//firebase setup for contact form
  var config = {
    apiKey: "AIzaSyCxeIHl0Yp953GUGL3-Q7m3VmTReKquaiw",
    authDomain: "tedxuoa-official.firebaseapp.com",
    databaseURL: "https://tedxuoa-official.firebaseio.com",
    projectId: "tedxuoa-official",
    storageBucket: "tedxuoa-official.appspot.com",
    messagingSenderId: "744450824546"
  };
  firebase.initializeApp(config);

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

//storing form data with firebase
// Reference messages collection
document.addEventListener('DOMContentLoaded', function () {
    var messagesRef = firebase.database().ref('messages');

    // Listen for form submit
    document.getElementById('contactForm').addEventListener('submit', submitForm);
    console.log('hi');

    // Submit form
    function submitForm(e){
        e.preventDefault();
    
        // Get values
        var name = getInputVal('name');
        var email = getInputVal('email');
        var message = getInputVal('message');

        // Save message
        saveMessage(name, email, message);

        // Show alert
        document.querySelector('.alert').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
        },3000);

        // Clear form
        document.getElementById('contactForm').reset();
    }

    // Function to get get form values
    function getInputVal(id){
        return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage(name, email, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
        name: name,
        email:email,
        message:message
        });
    }
});

//Getting the countdown working
var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

var countDown = new Date('Sep 29, 2018 10:00:00').getTime(),
    x = setInterval(function() {

        var now = new Date().getTime(),
        distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  IT'S EVENT DAY!!!;
      //}

    }, second);

//showing and hiding the countdown box
window.onload = function() {

    document.getElementById('toggleEvent').addEventListener('click', function () {
        var elem = document.querySelector('.container');
        elem.classList.toggle('hide');
    });
      
};
      


    