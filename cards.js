$.get("http://excesseats-env.us-east-1.elasticbeanstalk.com/eats/all", function(data){
	for (var i = 0; i < data.length; i++) {
		var myCards, card, myContainer, myPrice;
		myCards = $('#my-cards');
	
		card = $('<div class="card"></div>');
		cardImage = $('<img>');
		cardImage.attr("src", data[i].imgUrl);
		cardImage.attr("style", "width:100%; max-height:264px");
		myContainer = $('<div class="container"></div>');
	
		myCards.append(card);
		card.append(cardImage);
		card.append(myContainer);
		myContainer.append('<h4><b>' + data[i].description + '</b></h4>');
		myContainer.append('<p>' + data[i].producer + '<br>' + 
			'<s>' + "$" + data[i].price +'</s>' + 
			'<span style="color:green; font-weight:bold; padding-left:5px">' + "$" + data[i].discountedPrice + '</span><br>' +
			"Score: " + data[i].rating +
			'</p>');
	}
});

$(document).ready(function() {
	$('#sort-by-rating').click(function() {
		$('.card').remove();
		$.get("http://excesseats-env.us-east-1.elasticbeanstalk.com/eats/order/rating", function(data){
			for (var i = 0; i < data.length; i++) {
				var myCards, card, myContainer, myPrice;
				myCards = $('#my-cards');
			
				card = $('<div class="card"></div>');
				cardImage = $('<img>');
				cardImage.attr("src", data[i].imgUrl);
				cardImage.attr("style", "width:100%; max-height:264px");
				myContainer = $('<div class="container"></div>');
			
				myCards.append(card);
				card.append(cardImage);
				card.append(myContainer);
				myContainer.append('<h4><b>' + data[i].description + '</b></h4>');
				myContainer.append('<p>' + data[i].producer + '<br>' + 
					'<s>' + "$" + data[i].price +'</s>' + 
					'<span style="color:green; font-weight:bold; padding-left:5px">' + "$" + data[i].discountedPrice + '</span><br>' +
					"Score: " + data[i].rating +
					'</p>');
			}
		});
	});
	
	$('#sort-by-expire').click(function() {
		$('.card').remove();
		$.get("http://excesseats-env.us-east-1.elasticbeanstalk.com/eats/order/expires", function(data){
			for (var i = 0; i < data.length; i++) {
				var myCards, card, myContainer, myPrice;
				myCards = $('#my-cards');
			
				card = $('<div class="card"></div>');
				cardImage = $('<img>');
				cardImage.attr("src", data[i].imgUrl);
				cardImage.attr("style", "width:100%; max-height:264px");
				myContainer = $('<div class="container"></div>');
			
				myCards.append(card);
				card.append(cardImage);
				card.append(myContainer);
				myContainer.append('<h4><b>' + data[i].description + '</b></h4>');
				myContainer.append('<p>' + data[i].producer + '<br>' + 
					'<s>' + "$" + data[i].price +'</s>' + 
					'<span style="color:green; font-weight:bold; padding-left:5px">' + "$" + data[i].discountedPrice + '</span><br>' +
					"Score: " + data[i].rating +
					'</p>');
			}
		});
	});
});