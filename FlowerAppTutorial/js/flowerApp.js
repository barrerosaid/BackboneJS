
var redRoses = new app.singleFlower({
	name: "Red Roses",
	price: 30.00,
	color: "Red",
	img: "images/redRoses.jpg"
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
	img: "images/redRoses.jpg"
	link: "heirloomRose"
});

//list of model instances
var flowerGroup = new app.FlowersCollection([
	redRoses, rainbowRoses
]);

//adds the instance into collection 
flowerGroup.add(heirloomRoses);


//removes the instance into collection 
flowerGroup.remove(heirloomRoses);

console.log(flowerGroup.toJSON());

// console.log(rainbowRoses.toJSON());
// rainbowRoses.set('price', 14);