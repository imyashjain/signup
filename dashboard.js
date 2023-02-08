const username = document.getElementById('username');
const email = document.getElementById('email');

const searchString = window.location.search; // ?id=<id>

const queryParams = new URLSearchParams(searchString);

const userId = queryParams.get('id');

if (!userId) {
    window.location.href = './signin.html';
}

const userData = sessionStorage.getItem('userData');
const users = userData === null ? [] : JSON.parse(userData);

const exitingUser = users.find(user => user.id === parseInt(userId));

// null undefined 0 false
if (!exitingUser) {
    alert('invalid page');
    window.location.href = './signin.html';
}

username.innerHTML = exitingUser.firstName + ' ' + exitingUser.lastName;
email.innerHTML = exitingUser.emailId;
