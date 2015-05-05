define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/todos.html'], 
	function($, _, Backbone, todosTemplate){
		var  TodoView=Backbone.View.extend({
			tagName: 'li',
			template: _.template(todosTemplate),
		});
});