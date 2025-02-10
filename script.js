document.getElementById('submit-btn').addEventListener('click', function() {
    const code = document.getElementById('code').value.trim().toLowerCase(); // Case-insensitive check
    let errorMessage = document.getElementById('error-message');

    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.id = 'error-message';
        errorMessage.style.color = 'black';  // Change error message color to black
        errorMessage.style.fontWeight = 'bold';
        errorMessage.textContent = "Noo you can't be my wifey, where is my wifey katyusha?";
        document.body.appendChild(errorMessage);
    }

    if (code === 'katyusha') {
        window.location.href = 'main.html';
    } else {
        errorMessage.style.display = 'block'; // Keep error message permanently visible
    }
});
