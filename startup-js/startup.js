function checkUsername() {
    const name = localStorage.getItem('userName');
    if (!name) {
        document.getElementById('nav-login').innerHTML = 'Log in';
    }
    else {
        document.getElementById('nav-login').innerHTML = 'Log out';
    }
}

function logOut() {
    const loggedInButtonText = document.getElementById('nav-login');
    
    if (loggedInButtonText === 'Log out') {
        document.addEventListener('click', function () {
            localStorage.removeItem('userName');
        });
    }
}

function toSignIn() {
    window.location.href = "login.html";
}

checkUsername();
