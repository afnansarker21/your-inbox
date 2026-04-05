const form = document.getElementById("rego-form")

form.addEventListener("submit",function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
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

    errorMessage.textContent = "";
    
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify( {
            first_name: document.getElementById("firstName").value,
            email: email,
            password: password

        })
    })
    .then(res => res.json())
    .then(data => {
        alert("account created");
        window.location.href = "login.html"
})

    .catch(err=> {
        console.error(err);
        errorMessage.textContent = "Something went wrong, try again";
    })


});