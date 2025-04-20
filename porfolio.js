function toggleMenu() {
  const hamburger = document.getElementById("hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
}

const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

if (toggleBtn) {
  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.add("light-mode");
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  });

  toggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light-mode');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}


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
              title: 'Thank you!',
              text: 'Your message has been sent successfully 💌',
              icon: 'success',
              confirmButtonColor: '#00FFD1'
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
