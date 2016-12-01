$(function() {
  $('.dashboard-brick-list > li').click(function() {
    var newCard = $(this).clone();
    $('.dashboard-brick-list').append(newCard);
    refreshClass();
  });
  refreshClass();

});

var refreshClass = function() {
  var cards = $('.dashboard-brick-list li');

  if (cards.length < 3) {
    cards.addClass('two-columns');
  }

  if (cards.length > 3 && cards.length < 6) {
    cards.addClass('three-columns');
  }

}
