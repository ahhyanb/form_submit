// Select the <form> element

const formElement = document.querySelector("form");

console.log(formElement);

// Attach a submit event listener to the form
    // Prevent default form submission
    // Retrieve the input value
    // Check if the input value is blank (trimmed)
        // If blank:
            // Check if the error element already exists
                // If not, create the error element and append it to the form
        // If not blank:
            // Check if the error element exists
                // If it does, remove it from the form