
var redRoses = new app.singleFlower({
	name: "Red Roses",
	price: 30.00,
	color: "Red",
	img: "images/redRoses.jpg",
	link: "redRose"
});
var rainbowRoses = new app.singleFlower({
	name: "Rainbow Roses",
	price: 20.00,
	color: "orange",
	link: "rainbowRose"
});
var heirloomRoses = new app.singleFlower({
	name: "Heirloom Roses",
	price: 10.00,
	img: "images/redRoses.jpg",
	link: "heirloomRose"
});
var tantalizingTulips = new app.singleFlower({
	name: "Tantalizing Tulips",
	price: 4.00,
	color: "white"
});
var fleurDeLis = new app.singleFlower({
	name: "Fleur-De-Lis",
	price: 100.00,
	color: "green"
});

//list of model instances
var flowerGroup = new app.FlowersCollection([
	redRoses, rainbowRoses
]);

//new route instance created
var flowerRouter = new app.Router();

//keeps track of historical clicks
Backbone.history.start();

//creates variable with instance of collection view flowerGroup created above
var flowerGroupView = new app.allFlowersView({collection: flowerGroup});

$("allFlowers").html(flowerGroupView.render().el);

//adds the instance into collection 
flowerGroup.add(heirloomRoses);


//removes the instance into collection 
flowerGroup.remove(heirloomRoses);

console.log(flowerGroup.toJSON());

// console.log(rainbowRoses.toJSON());
// rainbowRoses.set('price', 14);