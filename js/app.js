$(document).ready (function(){
	$('.button').click(function(){
	    var text = $('#comment-body').val();
	    var quantity = $('#quantity').val();
	    var coupon = $('#checkbox').prop("checked");
	    //var quantitySpan = $('<span/>', {id:"quantity", text:quantityAmt})
	    if(text.length){
	        $('<li />', {html: text, class:'item'}).prependTo('ul.shopping-list').click(function() { 
		 		$(this).toggleClass('done'); 
		 		//newItem.append(quantitySpan);
			});
	        $('#comment-body').val("");
	    }
	});
	$('.item').click(function() { 
 		$(this).toggleClass('done'); 
	});
	$('.shopping-list').on('dblclick', '.item', function (){
		$(this).hide();
	});
    $('#comment-body').keydown(function(e){
        if(e.which==13){
        var text = $('#comment-body').val();
	    var quantity = $('#quantity').val();
	    var coupon = $('#checkbox').prop("checked");
	    if(text.length){
	        $('<li />', {html: text, class:'item'}).prependTo('ul.shopping-list').click(function() { 
		 		$(this).toggleClass('done'); 
			});
	        $('#comment-body').val("");
	    }
        }
    });
 });


