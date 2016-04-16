var clickView = {
	init: function() {

		this.clickElem = document.getElementById('count');

		this.render();
	},

	render: function() {
		var currentCat = control.getSelection();

		this.clickElem.textContent = currentCat.clickCount;
	}
};

var catView = {
	init:  function() {
		this.catElem = document.getElementById('center');
		this.catNameElem = document.getElementById('nom de chat');
		this.catImageElem = document.getElementById('kittyPorn');

		this.catImageElem.addEventListener('click', function(){
			control.incrementCounter();
		});

		this.render();
	},

	render: function(){

		var currentCat = control.getSelection();
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.path;
		clickView.init();

	}
};

var listView = {

	init:  function(){

		this.catListElem = document.getElementById('list');

		this.render();
	},

	render: function(){
		var cat, item, i;
		var cats = control.getCats();

		this.catListElem.innerHTML = '';

		for (i=0; i<cats.length; i++){
			var cat = cats[i];
			var item = document.createElement("li");
			item.textContent = cat.name;
			document.getElementById("list").appendChild(item);

			// create on-click event listener to choose list item
			item.addEventListener('click', (function(listItem) {
				return function(){
					control.select(listItem);
					catView.render();
				};
			})(cat));
		};
	}
};

var adminView = {

	init:  function() {
		this.adminButton = document.getElementById("adminButton");
		this.adminForm = document.getElementById("adminForm");

		adminButton.addEventListener('click', function(){
			return function(){
//				control.setAdmin(true);
				this.render();
			};
		});
//		control.setAdmin(false);
//		this.render();
	},

	render: function() {
		
		return function() {
			console.log("Admin button trying to display form by changing style from none to block");
			this.adminForm.style.display = "block";
		};

	}
};

control.init();