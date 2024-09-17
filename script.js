document.addEventListener("DOMContentLoaded", function() {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  function handleScroll() {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href').includes(id)) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }

  window.addEventListener("scroll", handleScroll);

  menuIcon.addEventListener("click", function() {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    console.log('Payload:', payload);

    emailjs.send("service_818lj6w", "template_apgx188", payload)
    .then(function(response) {
        console.log('Success:', response);
        alert('Message sent successfully!');
    }, function(error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    });
});
