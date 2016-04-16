var control = {
	init: function() {
		CatData.selection = CatData.cats[0];

		listView.init();
		catView.init();
		clickView.init();
		adminView.init();
	},

	getSelection: function() {
		return CatData.selection;
	},

	getCats: function() {
		return CatData.cats;
	},

	select: function(item){
		CatData.selection = item;
	},
	incrementCounter: function() {
		CatData.selection.clickCount++;
		catView.render();
	}
};

