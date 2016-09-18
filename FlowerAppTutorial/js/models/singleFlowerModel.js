// Models store web application data

// Creaing a namespace
var app = app || {};

app.singleFlower = Backbone.Model.extend({

	defaults: {
		color:"pink",
		img: "images/placeholder.jpg"
	},
	initialize: function(){
		console.log(this.get("name") + this.get("price"));

		this.on('change', function(){
			console.log("This model: " this.get("name)" + " changed"));
		});
		
		this.on('change:price', function(){
			console.log("The price for: " this.get("name)" + " changed"));
		});
	}
	
});