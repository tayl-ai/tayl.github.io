// Email form handling
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!email) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate API call
    showMessage('Submitting...', '');
    
    setTimeout(() => {
        showMessage('Thank you! We\'ll notify you when we launch.', 'success');
        emailInput.value = '';
        
        // Reset message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }, 1000);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

// Add subtle parallax effect to orbs on mouse move
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

