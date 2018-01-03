$( function() {

	$('body').fadeIn('slow');

	var btn = $('.myBtn'),
		modal = $('.modal'),
		close = $('.close');

	btn.click(function() {
		modal.css('display', 'block');
	});

	close.click(function() {
		modal.css('display', 'none');
	});

  var paragraphsRedirect = $('.informations > .row > div > p:last-child, .image-section > .container > .row > div > p:last-child');
  paragraphsRedirect.click(function() {
    window.location = 'http://www.google.com';
  });

});