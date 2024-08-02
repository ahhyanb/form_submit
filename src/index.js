// Select the <form> element
const formElement = document.querySelector("#searchForm");

// Attach a submit event listener to the form
const submitHandler = formElement.addEventListener("submit", (event) => {
    
    // Prevent default form submission
    event.preventDefault();

     // Retrieve the input value
    const inputElement = formElement.querySelector("input");
    const inputValue = inputElement.value.trim()

    // Check if the input value is blank (trimmed)
    if (inputValue === "") {

        // If blank:
            // Check if the error element already exists
        let errorElement = document.getElementById("searchError");

        // If not, create the error element and append it to the form
        if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.className = "error";
            errorElement.id = "searchError";
            errorElement.textContent = "Please enter a search term";
            formElement.appendChild(errorElement);
        }
        
        // If not blank:
            // Check if the error element exists
    } else {
        const errorElement = document.getElementById("searchError");
        
        // If it does, remove it from the form
        if (errorElement) {
            formElement.removeChild(errorElement);
        }
    }
});


    
   
    
    
        
                
      
               