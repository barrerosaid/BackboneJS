var app = app || {};

app.singleFlowerView = Backbone.View.extend({

	//this is <div> by default if not defined
	tagName: "article",
	className: "flowerListItem",
	
	//builds the template using underscore function
	template: _.template( $("#flowerElement").html()),
	
	
	render: function(){
		//gets model data for the template rendering
		var flowerTemplate = this.template(this.model.toJSON());
		//$el passes all properties above to backbone as a reference
		this.$el.html(flowerTemplate);
		return this;
	},
	
	events:{
		'mouseover': 'addBgColor',
		'mouseout': 'removeBgColor'
	},
	
	addBgColor: function(){
		this.$el.addClass("bgColorImage");
	},
	
	removeBgColor: function(){
		this.$el.removeClass("bgColorImage");
	}
	
});