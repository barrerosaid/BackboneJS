var app = app || {};

app.Router = Backbone.Router.extend({

	routes:{
		// empty quotes are for the home page
		"": "noCopy",
		"heirloomRose": "heirloomRoseMessage",
		"rainbowRose": "rainbowRoseMessage",
		"redRose": "redRoseMessage"
	},

	noCopy: function(){
		$("#copy").html("");
	},
	
	heirloomRoseMessage: function(){
		$("#copy").html("Heirloom roses are great!");
	},
	
	rainbowRoseMessage: function(){
		$("copy").html("rainbow roses are great!");
	},
	
	rainbowRoseMessage: function(){
		$("#copy").html("On Valentine's Day, give me red roses");
	}
});