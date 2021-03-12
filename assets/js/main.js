$(document).ready(function() {
  var navLink = $('nav ul.list-right li.dropdown');
      // Creo la mia funzione con hover
    navLink.mouseenter(function(event) {
      /* Stuff to do when the mouse enters the element */
      var dropdownMenu = $('.dropdown-menu', $(this));
      dropdownMenu.addClass('active')
    });


    navLink.mouseleave(function(event) {
      /* Stuff to do when the mouse leaves the element */
        var dropdownMenu = $('.dropdown-menu', $(this));
        dropdownMenu.removeClass('active')
    });
  });
