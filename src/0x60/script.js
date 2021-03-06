/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-01-31 12:18:31
\*----------------------------------------*/

document.addEventListener("DOMContentLoaded", setup);

function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	var img = document.querySelector("toPinch");
	toPinch.classList.add("hidden");
}

function setup(){
	 var img = document.querySelector("ouvert");
	ouvert.classList.add("hidden");
	var scale = 1,
	    gestureArea = document.querySelector('#pinch-area'),
	    scaleElement = document.querySelector('#toPinch'),
	    resetTimeout;

	interact(gestureArea)
	  .gesturable({
	    onmove: function (event) {
	      scale = scale * (1 + event.ds);
	      scaleElement.style.webkitTransform =
	      scaleElement.style.transform =
	        'scale(' + scale + ')';

	      
	    },
	    onend: function (event) {
	    	var img = document.querySelector("toPinch");
	toPinch.classList.add("hidden");
	      var img = document.querySelector("ouvert");
	ouvert.classList.remove("hidden");
	    }
	  });
	  interact('.trigger')
	.on("tap", tapHandler)
}

