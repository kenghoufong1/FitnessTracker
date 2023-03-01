const registerFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstname').value.trim();
    const lastName = document.querySelector('#lastname').value.trim();
    const birthday = document.querySelector('#birthday').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    if (firstName && lastName && birthday && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, birthday, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', registerFormHandler);