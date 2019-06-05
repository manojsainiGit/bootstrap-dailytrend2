function showVerification() {
	// adds verification div to the top of the page
	var message = 'The page you are viewing has been verified by Facebook. If you think this is a mistake, report it <span id="myBtn"><u>here</u></span>.';
	document.body.insertAdjacentHTML('afterbegin', '<div id="vbanner" class="vbn">' + message + '</div>');

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the elements that close the modal
	var okay = document.getElementsByClassName("okay-btn")[0];
	var cancel = document.getElementsByClassName("cancel-btn")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on okay, close the modal
	okay.onclick = function() {
		var modaltext = document.getElementById("modal-text");
		modaltext.textContent = "Thank you. Your report has been processed.";
		setTimeout(function() { modal.style.display = "none"; }, 2000);
		setTimeout(function() { hideVerification(); }, 2000);
	}
	// When the user clicks on cancel, close the modal
	cancel.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
}

// removes verification div
function hideVerification() {
	document.getElementById("vbanner").remove();
}

// runs verification 
function verify() {
	setTimeout(function() { showVerification(); }, 1000);
	setTimeout(function() { hideVerification(); }, 30000);
}

// initialize
verify();