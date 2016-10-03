// Backbone Model

var  Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
})

// Backbone Collection (group of models)

var Blogs = Backbone.Collection.extend({});

/*
var mBlog = new Blog({
	author: 'Michael',
	title: 'My first blog',
	url: 'https://michaelsblog.com'
});

var jBlog = new Blog({
	author: 'Jason',
	title: 'Jason\'s blog',
	url: 'https://jasonblog.com'
});

var blogs = new Blogs([mBlog, jBlog]);
*/

var blogs = new Blogs();

// Backbone View for one blog

var BlogView = Backbone.View.extend({
	model: new Blog(),
	tagName: 'tr',
	initialize: function(){
		this.template = _.template($('.blogs-list-template').html());
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});


// Backbone View for all blog
var BlogsView = Backbone.View.extend({
	model: blogs,
	el: $('.blogs-list'),
	initialize: function(){
		//renders this view at the start each time a blog is added
		this.model.on('add', this.render, this);
	},
	render: function(){
		//needed for _.each method
		var self = this;
		//emptied out 
		this.$el.html('');
		//for each individual blog place in array
		_.each(this.model.toArray(), function(blog){
			//calls render function abvoe for the view created for specific blog model
			self.$el.append((new BlogView({model: blog})).render().$el);
		});
		return this;
	}
});

//instantiates new blogs view
var blogsView = new BlogsView();

$(document).ready(function() {
	$('.add-blog').on('click', function() {
		var blog = new Blog ({
			author: $('.author-input').val(),
			title: $('.title-input').val(),
			url: $('.url-input').val()
		
		});
		
		$('.author-input').val('');
		$('.title-input').val('');
		$('.url-input').val('');
		console.log(blog.toJSON());
	
		
		//trigers intialize and renders the page
		blogs.add(blog);
	});
});
