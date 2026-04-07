const inboxList = document.getElementById("inbox-list");
const refreshBtn = document.getElementById("refresh-btn");
const clearAllCheckbox = document.getElementById("clear-all-checkbox");

const senders = ["Sarah MacDonald", "Linkedin", "Netflix", "Instagram", "Toby Miller", "Project Planner", "Zoom", "Amazon", "HOYTS", "Jane Olbin"];
const messages = [
    "Meeting - This Thursday our team will hold a meeting with...",
    "Profile check - Lucy James just checked out your profile...",
    "Subscription End - Your subscription is nearly over, why don't you...",
    "Direct Message - @puppylover123 has liked your post, view...",
    "(No subject) - Hi there, just checking if you have updated...",
    "You haven't used us for a while! Login in to view your status",
    "Want better quality filters?",
    "Delivery - Your parcel (1Qw37ns2) is on the way",
    "Get a 25% discount, enjoy your tickets and popcorn!",
    "Project Review - Hey, I really love your work...",
];

function updateCount() {
    const count = document.querySelectorAll(".email").length;
    document.getElementById("email-count").textContent = count;
}

function generateEmails() {
    inboxList.innerHTML = "";

    const emailCount = Math.floor(Math.random() * 11);
    document.getElementById("email-count").textContent = emailCount;

    for (let i = 0; i < emailCount; i++) {
        const sender = senders[Math.floor(Math.random() * senders.length)];
        const message = messages[Math.floor(Math.random() * messages.length)];

        const email = document.createElement("div");
        email.classList.add("email", "unread");

        email.innerHTML = `
        <input type="checkbox" class="email-checkbox">
        <span class="sender">${sender}</span>
        <span class="message">${message}</span>
        <button class="delete-btn">Delete</button>

        `;

        inboxList.appendChild(email);
    }
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






