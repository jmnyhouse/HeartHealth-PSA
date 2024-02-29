$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
	$('.card').click(function(){
		$(this).toggleClass('flipped');
	  });

	

	
	// FUNCTIONS

	$(".fruitsButton").on("click", function(event){
		event.preventDefault()

		$(".platedBroccoli").fadeIn(2000)
	
	})

	$(".proteinsButton").on("click", function(event){
		event.preventDefault()

		$(".platedTurkey").fadeIn(2000)
	
	})

	$(".carbsButton").on("click", function(event){
		event.preventDefault()

		$(".platedToast").fadeIn(2000)
	
	})

	$(".fatsButton").on("click", function(event){
		event.preventDefault()

		$(".platedAvocado").fadeIn(2000)
	
	})

	$(".subscribeButton").on("click", function(event){
		event.preventDefault()

		$(".thankYouResponse").delay(1000).fadeIn(2000)
		$("#email").fadeOut(1000)
		$(".subscribeButton").fadeOut(1000)
		$(".TYphrase").fadeOut(1000)
	
	})

	$(".mobilesubscribeButton").on("click", function(event){
		event.preventDefault()

		$(".thankYouResponse").delay(1000).fadeIn(2000)
		$("#email").fadeOut(1000)
		$(".mobilesubscribeButton").fadeOut(1000)
		$(".TYphrase").fadeOut(1000)


	
	})
	
	
	// INITIALIZATION
	
	
});