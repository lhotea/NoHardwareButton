
function onBackKeyPress(e) {
		alert("Wanna go back (1)?");
		e.preventDefault();
	    e.stopPropagation();
        return false;
}

document.addEventListener("backbutton", onBackKeyPress, true);
	  
