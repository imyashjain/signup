import { Validation } from './validation.js';

const txtEmailId = document.getElementById('emailId');
const txtPassword = document.getElementById('password');
const btnSignIn = document.getElementById('btnSignIn');
const body = document.getElementById('main');

const errorEmailId = document.getElementById("errorEmailId");
const errorPassword = document.getElementById("errorPassword");

const userData = sessionStorage.getItem('userData');

//let users = [];
//
//if (userData) {
//    users = JSON.parse(userData);
//}

const users = userData === null ? [] : JSON.parse(userData);

if (users && users.length === 0) {
    window.location.href = './signupform.html';
}

function onSubmit(event) {
    if (event.keyCode === 13) {
        onSignUp();
    }
}

function onSignIn() {
    const emailId = txtEmailId.value;
    const password = txtPassword.value;
    let returnValue = false;

    if (!Validation.isValidEmail(emailId)) {
        errorEmailId.innerHTML = 'Invalid Email';
        returnValue = true;
    }

    if (!Validation.isValidPassword(password)) {
        errorPassword.innerHTML = 'Invalid Password';
        returnValue = true;
    }

    if (returnValue === true) {
        return false;
    }

    errorEmailId.innerHTML = '';
    errorPassword.innerHTML = '';

    const filteredUser = users.filter(user => user.emailId === emailId
        && user.password === password);

    if (filteredUser && filteredUser.length > 0) {
        alert('Login Successfully');
        window.location.href = `./dashboard.html?id=${filteredUser[0].id}`;
    }

    else {
        alert('Entered email or password is incorrect');
    }
}

btnSignIn.addEventListener('click', onSignIn);
body.addEventListener('keypress', onSubmit);
