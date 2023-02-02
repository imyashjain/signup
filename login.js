const userData = sessionStorage.getItem('userData');
const txtEmailId = document.getElementById('emailId');
const txtPassword = document.getElementById('password');

let users = [];

if (userData) {
    users = JSON.parse(userData);
}

if (users && users.length === 0) {
    window.location.href = './login.html';
}

function onLogIn() {
    const emailId = txtEmailId.value;
    const password = txtPassword.value;

    const filteredUser = users.filter(user => user.emailId === emailId
        && user.password === password);

    if (filteredUser && filteredUser.length > 0) {
        alert('Login Successfully');
    }

    else {
        alert('Entered email or password is incorrect');
    }
}
