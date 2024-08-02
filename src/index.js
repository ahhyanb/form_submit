// Select the <form> element
const formElement = document.querySelector("#searchForm");

// Attach a submit event listener to the form
formElement.addEventListener("submit", (event) => {
    
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
//get a list of all the article elements 
const allArticles = document.querySelectorAll("article");

//get a list of the article titles <innerHTML> values of the <h2> element
allArticles.forEach((article) => {
    const title = article.querySelector("h2").innerHTML;

    //set the titles toLowerCase
    const lowerTitle = title.toLowerCase();

    //set searchTerm toLowerCase
    const lowerSearchTerm = inputValue.toLowerCase();

    //remove hidden class from the artcle if theres a match
    if(lowerTitle.includes(lowerSearchTerm)){
        article.classList.remove("hidden");

    //if theres no match add hidden class from article
    } else {
        article.classList.add("hidden");
    }

});
               
});
