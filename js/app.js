

$(document).ready(function (){  

	var url = "http://d345h07ts0fu2m.cloudfront.net/379/data48.json";
	var eventTemplate = _.template($('#event-template').html());
	 
	var success = function(data){
		var eventsEn2015 = data.categories.EnglishEvents2015.entries;
		
		eventsEn2015.forEach(function(element) {
			var eventHtml = eventTemplate(element);
			$("#events-placeholder").append(eventHtml);

		});
	

	};
	 
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