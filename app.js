$(function() {
  $('.start-test-button').click(function() {


    var cardTypes = ['card-warming','card-remove','card-available','card-analyzing'];

    var cardTypeIndex = Math.round(Math.random() * 3);

    var newCard = $('.templates > .' + cardTypes[cardTypeIndex]).clone();

    $('.dashboard-brick-list').append(newCard);

    $(newCard).find('#more').click(function() {
      $(this).parent().parent().parent().remove();
    });

    componentHandler.upgradeElement(newCard[0]);
    refreshClass();

  });
  refreshClass();

});

var refreshClass = function() {
  var cards = $('.dashboard-brick-list li');

  if (cards.length < 3) {
    cards.removeClass('three-columns');
    cards.removeClass('four-columns');
    cards.removeClass('five-columns');
    cards.removeClass('slim-rows');

    cards.addClass('two-columns');
  }

  if (cards.length > 2 && cards.length < 7) {
    cards.removeClass('two-columns');
    cards.removeClass('four-columns');
    cards.removeClass('five-columns');
    cards.removeClass('slim-rows');

    cards.addClass('three-columns');
  }

  if (cards.length > 6 && cards.length < 9) {
    cards.removeClass('two-columns');
    cards.removeClass('three-columns');
    cards.removeClass('five-columns');
    cards.removeClass('slim-rows');

    cards.addClass('four-columns');
  }

  if (cards.length > 8 && cards.length < 16) {
    cards.removeClass('two-columns');
    cards.removeClass('three-columns');
    cards.removeClass('four-columns');
    cards.removeClass('slim-rows');

    cards.addClass('five-columns');
  }

  if (cards.length > 15) {
    cards.removeClass('two-columns');
    cards.removeClass('three-columns');
    cards.removeClass('four-columns');
    cards.removeClass('five-columns');

    cards.addClass('slim-rows');
  }

}
