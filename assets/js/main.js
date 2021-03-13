$(document).ready(function() {
  var navLink = $('nav ul li.dropdown');
      // Creo la mia funzione con hover
    navLink.mouseenter(function(event) {
      /* Stuff to do when the mouse enters the element */
      $(this).find('.dropdown-menu').addClass('active')
    });


    navLink.mouseleave(function(event) {
      /* Stuff to do when the mouse leaves the element */
      $(this).find('.dropdown-menu').removeClass('active')
    });
  });
