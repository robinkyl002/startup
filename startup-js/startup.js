function checkUsername() {
    if (localStorage.getItem('userName') != '') {
        document.getElementById('nav-login').innerHTML = 'Log in';
    }
    else {
        document.getElementById('nav-login').innerHTML = 'Log out';
    }
}

function toSignIn() {
    window.location.href = "login.html";
}

checkUsername();
