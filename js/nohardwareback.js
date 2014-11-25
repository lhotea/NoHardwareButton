
function onBackKeyPress(e) {
		alert("Wanna go back (1)?");
		e.preventDefault();
	    e.stopPropagation();
        return false;
}

// Wait for device API libraries to load
    //
    function onLoad() {
		if (typeof navigator.device == "undefined"){
         document.addEventListener("deviceready", onDeviceReady, false);
		}
		else
		onDeviceReady();
		
    }

    // device APIs are available
    //
    function onDeviceReady(e) {
        // Register the event listener
	  alert("device ready!");
      document.addEventListener("backbutton", onBackKeyPress, true);
	  document.addEventListener("volumedownbutton", onBackKeyPress, false);
    }

	  
