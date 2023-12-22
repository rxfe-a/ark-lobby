function register() {
    var username = document.getElementById('username').value;
    var passcode = document.getElementById('password').value;
    localStorage.setItem('username', username);
    if (isNaN(passcode)) {
        document.getElementById('password').value = '';
        alert('Please enter a valid number for the passcode.');
    }
    else {
        localStorage.setItem('passcode', passcode);
        window.location.href = 'kh/index.html'
    }
}

if (localStorage.getItem('passcode')) {
    window.location.href= '../kh'
}