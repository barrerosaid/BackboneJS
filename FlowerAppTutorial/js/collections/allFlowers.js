//instantiate a collection
//add model instances

var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
	model: app.singleFlower
});

app.EuropeanCollection = Backbone.Collection.extend({
	model: app.singleFlower
});
