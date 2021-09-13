// selecting html elements 
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

// attaching 'click listener'
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	
	if(emailValue.includes('@')) {
		// we goochi
			alert('Thanks for your message');
		} else {
			alert('Invalid email. Please try again');
		}
})

// getting user entered values 

// javascript validations 
