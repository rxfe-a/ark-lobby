function sumbit() {
    var Username = document.getElementById("username")
    var password = document.getElementById("password")
    var refrencePoint = document.createElement('input')

    alert("Succesfully Registered")
    localStorage.setItem('username', btoa(Username.value))
    localStorage.setItem('password', btoa(password.value))
    window.location.href='../scientific/index.html'
}