import {Validation} from './validation.js';

const userData = sessionStorage.getItem('userData');
const txtEmailId = document.getElementById('emailId');
const txtPassword = document.getElementById('password');
const btnSignIn = document.getElementById('btnSignIn');

const errorEmailId = document.getElementById("errorEmailId");
const errorPassword = document.getElementById("errorPassword");

let users = [];

if (userData) {
    users = JSON.parse(userData);
}

if (users && users.length === 0) {
    window.location.href = './signupform.html';
}

function onSignIn() {
    const emailId = txtEmailId.value;
    const password = txtPassword.value;

    if(!Validation.isValidEmail()){
        errorEmailId.innerHTML = 'Invalid Email';
        return false;
    }

    else if(!Validation.isValidPassword()){
        errorPassword.innerHTML = 'Invalid Password';
        return false;
    }


    const filteredUser = users.filter(user => user.emailId === emailId
        && user.password === password);

    if (filteredUser && filteredUser.length > 0) {
        alert('Login Successfully');
    }

    else {
        alert('Entered email or password is incorrect');
    }
}

btnSignIn.addEventListener('click', onSignIn);
