const form = document.getElementById("login-form");

form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Save user name in localStorage
                localStorage.setItem("firstName", data.firstName);
            
                // Redirect to inbox (no URL params anymore)
                window.location.href = "inbox.html";
            }
            
            else {
                errorMessage.textContent = data.error;
            }

        } catch (error) {
            console.error("Error", error);
            errorMessage.textContent = "Something went wrong... try again";
        }

});