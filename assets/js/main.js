$(document).ready(function() {

var navLink = $('.navbar-right ul li a.nav-link')
  navLink.mouseenter(function(event) {
    var dropdown = $('.dropdown-menu');
    dropdown.show()
  });
});
