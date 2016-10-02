var app = app || {};

app.allFlowersView = Backbone.View.extend({
	tagName: "section",
	
	render: function(){
		//looks at items in collection and states addFlower function is part of the view
		this.collection.each(this.addFlower, this);
		return this;
	},
	
	//new instance of model called flowerView 
	addFlower: function(flower) {
		var flowerView = new app.singleFlowerView({model: flower});
		//single model instance is built into article tag which is appended to the section tag
		this.$el.append(flowerView.render().el);
	}
});

