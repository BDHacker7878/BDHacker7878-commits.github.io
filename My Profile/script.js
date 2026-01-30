// Select the form
const form = document.getElementById('contactForm');

// Listen for submit event
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields!');
    return;
  }

  if (!email.includes('@')) {
    alert('Please enter a valid email!');
    return;
  }

  // Success message
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Clear form
  form.reset();
});

	
