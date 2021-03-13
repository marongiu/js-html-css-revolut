// Seleziono gli elementi necessari

// Preparo il filte

$(document).ready(function() {

// Faccio le mie selezioni

var mainList = $('.nav-right ul.main li');

mainList.mouseenter(function(event) {
  $(this).find('.dropdown-list').addClass('active');
});

mainList.mouseleave(function(event) {
  $(this).find('.dropdown-list').removeClass('active');
});
});
