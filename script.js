// Smooth scrolling for navigation (existing)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Handle contact form submission with EmailJS (existing)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fromName = document.getElementById('from_name').value.trim();
    const senderEmail = document.getElementById('sender_email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (fromName && senderEmail && message) {
        console.log('Sending email with:');
        console.log('Subject:', fromName);
        console.log('from_name:', fromName);
        console.log('sender_email:', senderEmail);
        console.log('message:', message);
        emailjs.send('service_l1jy7h1', 'template_8haltkf', {
            from_name: fromName,
            sender_email: senderEmail,
            message: message,
            subject: fromName
        })
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Message sent successfully! I’ll get back to you soon.');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error('EmailJS error:', error);
            alert('Failed to send message. Please try again later.');
        });
    } else {
        alert('Please fill in your name, email, and message.');
    }
});

// Reveal photo on button click
document.getElementById('show-photo-btn').addEventListener('click', function() {
    const photo = document.getElementById('profile-photo');
    photo.classList.add('visible');
    this.style.display = 'none'; // Hide button after click
});
// Set last updated date
document.getElementById('update-date').textContent = new Date().toLocaleDateString();

// Update photo reveal function to show greeting
document.getElementById('show-photo-btn').addEventListener('click', function() {
    const photo = document.getElementById('profile-photo');
    const greeting = document.getElementById('greeting-message');
    
    photo.classList.add('visible');
    this.style.display = 'none';
    
    // Show greeting after a slight delay
    setTimeout(() => {
        greeting.textContent = "Nice to see you!";
        greeting.classList.add('visible');
    }, 500);
});


// Redirect to link on experience item click
document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank'); // Opens link in new tab
        }
    });
});