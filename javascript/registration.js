const form = document.getElementById("rego-form")

form.addEventListener("submit",function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const errorMessage = document.getElementById("error-message");

    // validating email
    const validDomains = ["@gmail.com", "@hotmail.com", "@yahoo.com"];
    const isValidEmail = validDomains.some(domain => email.endsWith(domain));

    if (!isValidEmail) {
        errorMessage.textContent = "You cannot sign up without a gmail, hotmail or yahoo account. Try again.";
        return;
    }

    
    if (password !== confirm_password) {
        errorMessage.textContent = "Passwords do not match";
        return;

    }

    errorMessage.testContent = "";
    alert("Success!"); // this will be replaced soon to back to login page 
});