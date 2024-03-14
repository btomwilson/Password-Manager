document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('password-form');
    const websiteInput = document.getElementById('website');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordList = document.getElementById('password-list');

    // Function to add a new password
    function addPassword(website, username, password) {
        // Create a new password item
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Website:</strong> ${website}<br>
            <strong>Username:</strong> ${username}<br>
            <strong>Password:</strong> ${password}
        `;

        // Append the password item to the password list
        passwordList.appendChild(li);
    }

    // Event listener for form submission
    passwordForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const website = websiteInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        if (website === '' || username === '' || password === '') {
            alert('Please fill out all fields.');
            return;
        }
        addPassword(website, username, password);
        passwordForm.reset(); // Clear the form
    });
});
