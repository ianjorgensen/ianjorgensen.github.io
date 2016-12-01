$(function() {
  $('.dashboard-brick-list > li').click(function() {
    var newCard = $(this).clone();
    $('.dashboard-brick-list').append(newCard);
    refreshClass();
    $('.console').html($('body').width() + ' ' + $('body').height());
  });
  refreshClass();

});

var refreshClass = function() {
  var cards = $('.dashboard-brick-list .demo-card');

  if (cards.length > 2) {
    cards.removeClass('mdl-card-big');
  } else {
    cards.addClass('mdl-card-big');
  }
}
