const submit_button = document.querySelector('.newsletter-form button');
const success_button = document.querySelector('.success button');
const newsletter = document.querySelector('.newsletter');
const success = document.querySelector('.success');
const email = document.querySelector('.newsletter-form input');
submit_button.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value.trim().includes('@') && email.value.trim().includes('.')) {
        newsletter.style.display = 'none';
        success.style.display = 'grid';
        email.value = '';
    }else {
        alert('Please enter a valid email address');
    }
});
success_button.addEventListener('click', () => {
    newsletter.style.display = 'grid';
    success.style.display = 'none';
});