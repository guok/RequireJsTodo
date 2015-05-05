
define(['underscore', 'backbone', 'models/todo', 'localStorage'], function(_, Backbone, Todo, Storage){
	var TodosCollection = Backbone.Collection.extend({
		model: Todo,
		localStorage:new Storage("todos"),
		done: function(){
			return this.filter(function(todo){
				todo.get('done');
			});
		},
		remaining:function	(){
			return this.without.apply(this, this.done());
		},
		nextOrder: function(){
			if(!this.length) return 1;
			return this.last().get('order')+1;
		},
		comparator:function(todo){
			return todo.get('order');
		}
	});

	return new TodosCollection;
});