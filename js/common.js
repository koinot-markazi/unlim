

$(function() {
	var patternPhoneMask = IMask(document.getElementById('phoneNumber'), {
		mask: '+{7}(000)000-00-00',
		lazy: false,  // make placeholder always visible
		placeholderChar: '_'     // defaults to '_'
	  }).on('accept', function() {
		
	  }).on('complete', function() {
  
	  });

});

$('.country-list').children().click(function(){
	$(this).siblings().removeClass('active')  	
	$(this).addClass('active')
})


// Changing value of price
$('.tarif').on("change", function(){
	$('.big-price').html($(this).val() * 276)
})

$('.toggle-active').click(function(){
	$('.instruction').toggle()
})

$('#number_of_periods_select').on("change", function(){
	$('#change_period').html($(this).val()*30)
})


$('#search-btn').click(function(){
	$('.search-block').css("left", "0")
})
$('.search-close').click(function(){
	$('.search-block').css("left", "100vw")
	console.log('left: 0')
})

a = 180;
$('#table-toggler').click(function(){
	$('#dashboard-table').slideToggle("slow");
	$('.arrow').css("transform", "rotate(" + a +"deg)")
	a += 180;
})