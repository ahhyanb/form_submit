// Select the <form> element
const formElement = document.querySelector("#searchForm");

// Attach a submit event listener to the form
const submitHandler = formElement.addEventListener((event) => {
    
    // Prevent default form submission
     event.preventDefault();

     // Retrieve the input value
     const inputValue = formData
});
   
    // Retrieve the input value
    // Check if the input value is blank (trimmed)
        // If blank:
            // Check if the error element already exists
                // If not, create the error element and append it to the form
        // If not blank:
            // Check if the error element exists
                // If it does, remove it from the form