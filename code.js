document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        
        alert('Thank you for contacting us, ' + name + '!');
        form.reset();
    });
});
