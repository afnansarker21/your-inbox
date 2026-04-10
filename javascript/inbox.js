const inboxList = document.getElementById("inbox-list");
const refreshBtn = document.getElementById("refresh-btn");
const clearAllCheckbox = document.getElementById("clear-all-checkbox");

const emailsData = [
    { sender: "Amazon", message: "(Delivery) Your order (#128YM3Bn) has been shipped..." },
    { sender: "Instagram", message: "@aleesa.khan76 has just liked your post..." },
    { sender: "Toby Miller", message: "(Project Plan) Hi team, thanks for the collaboration today. Looking forward to..." },
    { sender: "Hanin Al-Jaj", message: "(HR Management) Just a reminder to please submit your form and confirm paycheck..." },
    { sender: "Linkedin", message: "Chris O'Bollen has just sent you a follow!" },
    { sender: "me", message: "(no subject) This is my paycheck, download PDF..." },
    { sender: "Brian Kello", message: "(Meeting) Hi team, just a reminder that our meeting this Wednesday is cancelled..." },
    { sender: "GrocerySHop", message: "$$$You have just won $45,000, please click on the link below to redeem!" },
    { sender: "Project Planner", message: "Thanks for signing up! Please activate your email to get started..." },
    { sender: "Chloe Yam", message: "Hi, can you please update the team portfolio? I noticed you have made some..." }

];

function updateCount() {
    const count = document.querySelectorAll(".email").length;
    document.getElementById("email-count").textContent = count;
}

function generateEmails() {
    inboxList.innerHTML = "";

    const shuffled = [...emailsData].sort(() => 0.5 - Math.random());
    const emailCount = Math.floor(Math.random() * (emailsData.length + 1));

    const selectedEmails = shuffled.slice(0, emailCount);

    document.getElementById("email-count").textContent = selectedEmails.length;

    selectedEmails.forEach(emailData => {
        const email = document.createElement("div");
        email.classList.add("email", "unread");

        email.innerHTML = `
        <input type="checkbox" class="email-checkbox">
        <span class="sender">${emailData.sender}</span>
        <span class="message">${emailData.message}</span>
        <button class="delete-btn">Delete</button>
        `;

        inboxList.appendChild(email);
    });
} 

function generateEmails() {
    inboxList.innerHTML = "";

    const shuffled = [...emailsData].sort(() => 0.5 - Math.random());
    const emailCount = Math.floor(Math.random() * (emailsData.length + 1));

    const selectedEmails = shuffled.slice(0, emailCount);

    document.getElementById("email-count").textContent = selectedEmails.length;

    selectedEmails.forEach(emailData => {
        const email = document.createElement("div");
        email.classList.add("email", "unread");

        email.innerHTML = `
        <input type="checkbox" class="email-checkbox">
        <span class="sender">${emailData.sender}</span>
        <span class="message">${emailData.message}</span>
        <button class="delete-btn">Delete</button>
        `;

        inboxList.appendChild(email);
    });
} 

refreshBtn.addEventListener("click", generateEmails);

document.addEventListener("change", function(e) {
    if (e.target.classList.contains("email-checkbox")) {
        const email = e.target.parentElement;

        if (e.target.checked) {
            email.classList.remove("unread");
            email.classList.add("active");
        } else {
            email.classList.add("unread");
            email.classList.remove("active");
        }
    }
});

// Delete button
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        updateCount();
    }
});

// Clear all (checkbox)
clearAllCheckbox.addEventListener("change", () => {
    if (clearAllCheckbox.checked) {
        document.querySelectorAll(".email").forEach(email => email.remove());
        updateCount();
    }
});

// Initial load
generateEmails();






