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

	setCurrent: function(name, src, count) {
		console.log(name +" "+ src +" "+ count);
		CatData.selection.name = name;
		console.log("selection " + CatData.selection.name);
		CatData.selection.path = src;
		CatData.selection.clickCount = count;
		return CatData.selection;
	},

	getCats: function() {
		return CatData.cats;
	},

	select: function(item){
		CatData.selection = item;
		catView.render();
		clickView.render();
	},

	incrementCounter: function() {
		CatData.selection.clickCount++;
		clickView.render();
	}
};

