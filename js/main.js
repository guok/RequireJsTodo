

require.config({
	baseUrl: "./js",
	paths:{
		jquery: 'libs/jquery-min',
	    underscore: 'libs/underscore-min',
	    backbone: 'libs/backbone-min',
	    text: 'libs/require/text',
	    localStorage:'libs/backbone.localStorage-min'
	}
});

require(['views/app'], function(AppView){
	var app_view = new AppView;
});