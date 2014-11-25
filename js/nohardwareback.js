
function onBackKeyPress(e) {
		alert("Wanna go back (1)?");
		e.preventDefault();
	    e.stopPropagation();
        return false;
}

// Wait for device API libraries to load
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
      document.addEventListener("backbutton", onBackKeyPress, true);
	  document.addEventListener("volumedownbutton", onBackKeyPress, false);
    }

	  
