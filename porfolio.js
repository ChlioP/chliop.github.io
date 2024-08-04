function toggleMobileMenu(menu) {
    console.log('Hamburger icon clicked'); // Log a message to indicate the function is being called
    menu.classList.toggle('open');
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("emailAd");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email Adress: ${email.value}<br> Contact Number: ${phone.value}<br> Message: ${message.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "chliopham@gmail.com",
        Password : "5F1E9ECD7BCACB48EC927341487C1BF6CFC1",
        To : 'chliopham@gmail.com',
        From : "chliopham@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message =="OK") {
            Swal.fire({
                title: "Sucsess!",
                text: "Your Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}


form.addEventListener("submit", (e) => {
     e.preventDefault();

     sendEmail();
})