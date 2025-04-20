function toggleMobileMenu(menu) {
    console.log('Hamburger icon clicked'); // Log a message to indicate the function is being called
    menu.classList.toggle('open');
}
const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Set initial icon to 🌙 (dark mode)
toggleBtn.textContent = '🌙';

// Toggle between dark and light modes
toggleBtn.addEventListener('click', () => {
  const isLight = root.classList.toggle('light-mode');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
});

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("emailAd");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `
      <b>Full Name:</b> ${fullName.value}<br>
      <b>Email Address:</b> ${email.value}<br>
      <b>Contact Number:</b> ${phone.value}<br>
      <b>Message:</b> ${message.value}<br>`;

    Email.send({
        SecureToken: "5f8d3391-d726-4f8d-aa8f-43d2e2668ac8", // Use SecureToken instead of raw credentials
        To: 'chliopham@gmail.com',
        From: 'chliopham@gmail.com',
        Subject: subject.value,
        Body: bodyMessage
    }).then(response => {
        if (response === "OK") {
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent!",
                icon: "success"
            });

            form.reset(); // Clear the form after success
        } else {
            Swal.fire({
                title: "Oops!",
                text: "Something went wrong. Please try again.",
                icon: "error"
            });
        }
    });
}



form.addEventListener("submit", (e) => {
     e.preventDefault();

     sendEmail();
})
