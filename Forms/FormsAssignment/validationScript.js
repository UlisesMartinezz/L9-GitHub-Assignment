/* 
Name: Ulises Martinez
File Name: validationScript.js
Date: March 4, 2024
*/
   
   // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      let inputField = document.getElementById('inputField'); 
      let inputFieldValue = inputField.value;

      let form = document.getElementById('myForm');
      // Regular expression pattern for alphanumeric input
      let alphanumericRegex = /^[A-Za-z0-9]*$/; 
      // Check if the input value matches the pattern
      let inputMatchTest = alphanumericRegex.test(inputFieldValue)
        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

        form.addEventListener('submit', function(e){
          if (!(inputMatchTest)) {
            e.preventDefault();
            inputField.setCustomValidity('Enter an alphanumeric value')
          }
          else {
            form.onsubmit(); 
          }
        })
        
    