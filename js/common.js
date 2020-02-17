

$(function() {
	var patternPhoneMask = IMask(document.getElementById('phoneNumber'), {
		mask: '+{7}(000)000-00-00',
		lazy: false,  // make placeholder always visible
		placeholderChar: '_'     // defaults to '_'
	  }).on('accept', function() {
		
	  }).on('complete', function() {
  
	  });

});
