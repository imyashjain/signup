import {Validation} from './validation';

const userData = sessionStorage.getItem('userData');
const txtEmailId = document.getElementById('emailId');
const txtPassword = document.getElementById('password');

const errorEmailId = document.getElementById("errorEmailId");
const errorPassword = document.getElementById("errorPassword");

let users = [];

if (userData) {
    users = JSON.parse(userData);
}

if (users && users.length === 0) {
    window.location.href = './signin.html';
}

function onSignIn() {
    const emailId = txtEmailId.value;
    const password = txtPassword.value;

    if(Validation.isValidEmail()){
        errorEmailId.innerHTML = '';
        return true;
    }
    
    else{
        errorEmailId.innerHTML = 'Invalid Email';
        return false;
    }

    if(Validation.isValidPassword()){
        errorPassword.innerHTML = '';
        return true;
    }
    
    else{
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
