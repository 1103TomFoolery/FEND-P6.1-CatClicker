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
		this.adminBtn = document.getElementById('adminBtn');
		this.adminForm = document.getElementById("adminForm");
		this.submitBtn = document.getElementById("submit");
		this.cancelBtn = document.getElementById("cancel");

		this.adminBtn.addEventListener("click", function(){
			adminView.render("open");
		});

		this.cancelBtn.addEventListener("click", function() {
			CatData.admin = false;
			adminView.render("close");
		});

		this.submitBtn.addEventListener("click", function() {
			CatData.admin = false;
			adminView.render("submit");
		});

	},

	render: function(key) {
		
		if (key == "open") {

			this.adminForm.style.visibility = "visible";
		}
		else if (key == "close")
			this.adminForm.style.visibility = "hidden";
		else {
			var currentCat = control.getSelection();
			document.getElementById("name").value = currentCat.name;
			document.getElementById("path").value = currentCat.path;
			document.getElementById("clicks").value = currentCat.clickCount;
			console.log(currentCat.name);

			control.setSelection(document.getElementById("name").value,
				document.getElementById("path").value,
				document.getElementById("clicks").value);
			console.log(control.getSelection().name);
			this.adminForm.style.visibility = "hidden";
			// adminView.init();
			// listView.init();
			// catView.init();
			// clickView.init();
		}

	}
};

control.init();