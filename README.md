# BackboneJSApplication
Training with BackboneJS

# Notes for Training:
* BackboneJS is a structured MVC JavaScript library
 * Models: Contains application data. This stores the data
 * Views: Display data on the screen. This displays the model onto a webpage
 * Controllers: Transfers the model data to the view. These are a group of models similar to a JavaScript array

* Backbone Components:
 * Events: used to bind custom events in our code such as mouseclicks and mouseovers
 * Routers: creates navigation in our web app (similar to controllers in MVC)
 * Sync: maps Backbone data to the server side such as databases

* Backbone Facts:
 * Components are JavaScript objects
  * Built as a list of key/value pairs from JavaScript methods and properties
  * Methods can be custom built
 * Typiscally used to build single-page applications (SPAs)
 * Backbone is not a framework since it doesn't need configuration while a library has prebuilt functions ready to use

* Backbone Model Functions:
 * ``` initialize() ``` - runs as soon as model instance is created and watches for changes
 * ``` get() ```  - gets/finds a specific model property
 * ```set() ``` - changes or adds new properties to models
 * ```on() ```- triggers the changes
