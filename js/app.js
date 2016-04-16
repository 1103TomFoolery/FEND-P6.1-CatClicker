
render = function() {
	for(var i=0; i<CatData.length; i++) {
		//create the list
		var cat = CatData[i].name;
		var item = document.createElement("li");
		var textnode = document.createTextNode(cat);
		item.setAttribute('id', cat);
		item.appendChild(textnode);		
		document.getElementById("left").appendChild(item);
		var counterDiv = document.createElement('div');
		document.getElementById('right').appendChild(counterDiv);

        var chooseCat= document.getElementById(''+cat+'');

        //add event listener to list items
        chooseCat.addEventListener('click', (function(catCopy) {
				return function() {
					var selection = CatData.filter(function(obj){
						return obj.name == catCopy;
					})[0];
				    while(center.childNodes.length > 1) {
						center.removeChild(center.lastChild);
					}
					var catLabel = document.createTextNode(selection.name);
					center.appendChild(catLabel)

					var imgDiv = document.createElement('div');
					center.appendChild(imgDiv);
					var img = document.createElement('IMG');
					img.src = selection.path;
					imgDiv.appendChild(img);

		    		counterDiv.textContent = selection.clickCount;
				    img.addEventListener('click',(function(clickCat) {
				    	return function() {
				    		selection.clickCount += 1;
							counterDiv.textContent = selection.clickCount;
				    		while(right.childNodes >1){
								console.log(right.childNodes);
				    			right.removeChild(right.lastChild);
				    		}
				    	}
				    })(img));

				};
	    })(cat));
	}
}
