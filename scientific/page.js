const autosuggestForm = document.getElementById("Autosuggest");
    const autosuggestInput = document.getElementById("autosuggest-input-");
    const result = document.getElementById("result");

    autosuggestForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting
        alert('yoo')
    });