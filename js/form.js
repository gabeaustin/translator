// alert("This is a test to see if the script file is linked correctly.");

let form = document.getElementById("form_main");

// This is for when users input no data or invalid data
function error(english_word, spanish_word) {
	// show the error msg
	const error = input.previousElementSibling;
	error.innerText = message;
	return false;
}

// This is for when users input valid data
function success(input) {
	// hide the error msg
	const error = input.previousElementSibling;
	error.innerText = "";
	return true;
}

// This is what happens when the Submit button is pressed
function formSubmit() {
	alert("Your form was submitted correctly.");
}

// This is the data from the form
function formData() {
	document.getElementById("form_main").focus().submit();
}

