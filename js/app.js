

$(document).ready(function (){  
	var url = "http://d345h07ts0fu2m.cloudfront.net/379/data48.json";
	var entryId;

	// Templates
	var eventTemplate = _.template($('#event-template').html());

	
	// Gather data from endpoint
	var success = function(data){	
		var events2015 = data.categories.EnglishEvents2015.entries;
		entryId = events2015.entry_id;
		
		events2015.forEach(function(element) {
			
			// events main view
			var eventHtml = eventTemplate(element);
			$("#events-placeholder").append(eventHtml);

		});
	};
    
    // Open lightboxs
    $("#events-placeholder").on("click", ".show-panel", function(e) {
    	var entry_id=$(this).attr("data-id");
    	console.log(entry_id);
		$("#lightbox-panel-"+entry_id).fadeIn(300);
    });

    //Close lightbox
    $("#events-placeholder").on("click", "#close-panel", function(e) {
		$(".lightbox-panel").fadeOut(300);
    });

	 // retrieve data from endpoint in jsonp form
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