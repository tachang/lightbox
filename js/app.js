

$(document).ready(function (){  
	// Templating
	var eventTemplate = _.template($('#event-template').html());
	
    
    // Open lightbox
    $("#events-placeholder").on("click", ".show-panel", function(e) {
    	var entry_id = $(this).attr("data-id");
		$("#lightbox-panel-"+entry_id).fadeIn(300);
		 $(".overlay").css("display", "block");
    });

    //Close lightbox
    $("#events-placeholder").on("click", ".close-panel", function(e) {
		$(".lightbox-panel").fadeOut(300);
		$(".overlay").css("display", "none");
    });

    // Prev image
    $(".events-placeholder").on("click", "#prev", function(e) {
    	console.log("this works");

    });

    // Next Img
    $("#events-placeholder").on("click", "#next", function(e) {
    	console.log("this works");

    });

	 // retrieve data from endpoint in jsonp form
	$.ajax({	
	  type: 'GET',    
	  url: "http://d345h07ts0fu2m.cloudfront.net/379/data48.json",
	  async: false,
	  jsonpCallback: 'cmsCallback',
	  contentType: "application/json",
	  dataType: 'jsonp',         
	  cache:false, 
	  success: function(data){	
		var events2015 = data.categories.EnglishEvents2015.entries;
		events2015.forEach(function(element) {

			// edit description
			d = element.desc;
			r = element.rsvp;
			checkDesc = d.indexOf("TO");
			element.description;
			element.res;
		
			if (checkDesc !== -1) {
				description = d.substring(0, checkDesc);
				element.res = "RSVP";
			}
			else {
				description = d;
				r = "";
				element.res = "";
			}
			

			//edit month
			mon = element.month;
			mon = mon.substring(0, 3);

			var eventHtml = eventTemplate(element);
			$("#events-placeholder").append(eventHtml);


		});
	  },
	  error:function(jqXHR, textStatus, errorThrown){
	    alert(errorThrown);
	  }
	});
});