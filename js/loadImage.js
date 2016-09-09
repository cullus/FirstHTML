function loadImage(jsonImage, callback){
	var promises = new Array();
	var loadNum = 0;
	for(var i in jsonImage){
		loadNum++;
		var image = new Image();
		imageLoaded[jsonImage[i].name] = image;

		var promise = new Promise(function(resolve, reject) {
			image.addEventListener("load", function() {
				loadNum--;
				if(loadNum == 0){
					callback(jsonImage);
				}
				resolve();
			});

			image.addEventListener("error", function() {
				throw ("unable to load " + this.src);
			});
		});
		promise[jsonImage[i].name] = promise;
		image.src = jsonImage[i].src;
	}
	return Promise.all(promises);
}