

$(document).ready(function (){  
	var url = "http://d345h07ts0fu2m.cloudfront.net/379/data48.json";
	var eventTemplate = _.template($('#event-template').html());
	
	var success = function(data){	
		var events2015 = data.categories.EnglishEvents2015.entries;
		events2015.forEach(function(element) {
			var eventHtml = eventTemplate(element);
			$("#events-placeholder").append(eventHtml);
		});
	};

	$("a#show-panel").click(function(){
		console.log("this is working")
		$("#lightbox, #lightbox-panel").fadeIn(300);
	});
	
	$("a#close-panel").click(function(){
		$("#lightbox, #lightbox-panel").fadeOut(300);
	})
	 
	$.ajax({	
	  type: 'GET',    
	  url: url,
	  async: false,
	  jsonpCallback: 'cmsCallback',
	  contentType: "application/json",
	  dataType: 'jsonp',
	  crossDomain: true,          
	  cache:false, 
	  success: success,
	  error:function(jqXHR, textStatus, errorThrown){
	    alert(errorThrown);
	  }
	});
});