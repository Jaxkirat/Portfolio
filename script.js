let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const typed = new Typed('.multiple-text' ,{
    strings: ['Machine Learning Engineer' , 'Web Developer' , 'Data Analyst' , 'Software Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
        }
    )


// Initialize EmailJS with your user ID
emailjs.init('lo7tTq9O8gG4PrOKO');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Send the form data using EmailJS
    emailjs.sendForm('service_o4mv5vl', 'template_ms5l8w8', this)
        .then(function() {
            alert('Your message has been sent!');
        }, function(error) {
            alert('Oops... Something went wrong! Please try again later.');
        });
});
