function register() {
    var username = document.getElementById('User').value;
    var passcode = document.getElementById('passcode').value;
    localStorage.setItem('username', username);
    if (isNaN(passcode)) {
        document.getElementById('password').value = '';
        alert('Please enter a valid number for the passcode.');
    }
    else {
        alert('You will be sent to our fake khan academy site in the calculator put in your new passcode!')
        localStorage.setItem('passcode', passcode);
        window.location.href = 'kh/index.html'
    }
}

if (localStorage.getItem('passcode')) {
    window.location.href= '../kh'
}