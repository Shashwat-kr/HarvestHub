// Authentication pages JavaScript

// Tab switching functionality
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and forms
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding form
        tab.classList.add('active');
        const formToShow = document.querySelector(`.${tab.dataset.tab}-form`);
        formToShow.classList.add('active');
    });
});

// Password visibility toggle
const togglePasswordButtons = document.querySelectorAll('.toggle-password');

togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
        const passwordInput = button.previousElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle password visibility
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

// Password strength meter
const signupPassword = document.getElementById('signupPassword');
const strengthSegments = document.querySelectorAll('.strength-segment');
const strengthText = document.querySelector('.strength-text');

signupPassword.addEventListener('input', () => {
    const password = signupPassword.value;
    let strength = 0;
    
    // Check password length
    if (password.length >= 8) {
        strength += 1;
    }
    
    // Check for lowercase and uppercase letters
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        strength += 1;
    }
    
    // Check for numbers
    if (/\d/.test(password)) {
        strength += 1;
    }
    
    // Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) {
        strength += 1;
    }
    
    // Update strength meter
    strengthSegments.forEach((segment, index) => {
        segment.className = 'strength-segment';
        if (index < strength) {
            if (strength === 1) {
                segment.classList.add('weak');
            } else if (strength === 2 || strength === 3) {
                segment.classList.add('medium');
            } else {
                segment.classList.add('strong');
            }
        }
    });
    
    // Update strength text
    if (password === '') {
        strengthText.textContent = '';
        strengthText.style.color = '';
    } else if (strength === 1) {
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#e74c3c';
    } else if (strength === 2) {
        strengthText.textContent = 'Fair';
        strengthText.style.color = '#f39c12';
    } else if (strength === 3) {
        strengthText.textContent = 'Good';
        strengthText.style.color = '#f39c12';
    } else {
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#2ecc71';
    }
});

// Form submission
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // In a real application, this would send a request to the server for authentication
    console.log('Login attempt:', { email, password });
    
    // Simulate successful login
    showNotification('Login successful! Redirecting...');
    
    // Redirect to home page after a delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', true);
        return;
    }
    
    // In a real application, this would send a request to the server to create an account
    console.log('Signup attempt:', { name, email, password });
    
    // Simulate successful signup
    showNotification('Account created successfully! Redirecting to login...');
    
    // Switch to login tab after a delay
    setTimeout(() => {
        authTabs.click();
        
        // Pre-fill login form with the email
        document.getElementById('loginEmail').value = email;
    }, 1500);
});

// Custom notification function
function showNotification(message, isError = false) {
    // Create notification element if it doesn't exist
    if (!document.querySelector('.auth-notification')) {
        const notification = document.createElement('div');
        notification.className = 'auth-notification';
        document.body.appendChild(notification);
        
        // Style the notification
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '12px 20px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.3s ease';
        notification.style.zIndex = '9999';
    }
    
    const notification = document.querySelector('.auth-notification');
    notification.textContent = message;
    
    // Set color based on error status
    if (isError) {
        notification.style.backgroundColor = '#e74c3c';
        notification.style.color = 'white';
    } else {
        notification.style.backgroundColor = 'var(--primary-color)';
        notification.style.color = 'white';
    }
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
    }, 3000);
}
