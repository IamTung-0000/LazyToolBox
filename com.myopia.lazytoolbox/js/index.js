/* Create an instance of CSInterface. */
var csInterface = new CSInterface();
/* Make a reference to your HTML button and add a click handler. */
var tickbox = document.querySelector("#sw1");
tickbox.addEventListener("click", writeSetting);

/* Write a helper function to pass instructions to the ExtendScript side. */

function writeSetting() {
	
	var checkbox = document.getElementById('sw1');
	
	if (checkbox.checked == true){
		csInterface.evalScript("LassoOn()");
	}
	
	if (checkbox.checked == false){
		csInterface.evalScript("LassoOff()");
	}
  
}

function reFill(){
	var btn_refill = document.getElementById('btn2');
		csInterface.evalScript("refill()");
}

function newLayer(){
	var btn_newLayer = document.getElementById('btn1');
		csInterface.evalScript("newLayer()");
}



     