const txtFirstName = document.getElementById('firstName');
const txtLastName = document.getElementById('lastName');
const txtEmailId = document.getElementById('emailId');
const txtPassword = document.getElementById('password');
const txtConfirmPassword = document.getElementById('confirmPassword');
const btnSignUp = document.getElementById('btnSignUp');
const body = document.getElementById('main');
const flpProfilePic = document.getElementById('flpProfilePic');

const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmailId = document.getElementById("errorEmailId");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");

const userData = sessionStorage.getItem('userData');

// let users = [];
// if (userData === null) {
//     users = [];
// }
// else {
//     users = JSON.parse(userData);
// }

const users = userData === null ? [] : JSON.parse(userData);

function onSubmit(event){
    if(event.keyCode === 13){
        onSignUp();
    }
}

function onUploadProfilePic(event) {
    console.log(event);

    const profileImg = document.getElementById('profileImg');
    const img = document.createElement('img');
    img.src = './';
    profileImg.append(img);
}

function onSignUp() {

    if (validateFirstName() & validateLastName() & validateEmailId() & validatePassword() & validateConfirmPassword()) {
        const firstName = txtFirstName.value;
        const lastName = txtLastName.value;
        const emailId = txtEmailId.value;
        const password = txtPassword.value;

        const user = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
            password,
        }
        
        if(checkDuplicate(emailId) === true){
            const userId = getUserId();
            user.id = userId;
            users.push(user);
            sessionStorage.setItem('userData', JSON.stringify(users));
            window.location.href = './signin.html'
        }
    }
}

function checkDuplicate(emailId){
    const data = users.filter(user => user.emailId === emailId);
    if(data && data.length > 0){
        alert('User Already Exists!');
        return false;
    }
    return true;
}

function getUserId(){
    const lastUserId = sessionStorage.getItem('lastUserId');

    let userId;
    if(lastUserId === null){
        userId = 1;
        sessionStorage.setItem('lastUserId', userId);
        return userId;
    }
    userId = parseInt(lastUserId) + 1;
    sessionStorage.setItem('lastUserId', userId);
    return userId;
}

const regexName = /^[a-zA-Z]*$/;
const regexEmailId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,4})$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=^\S*$)[a-zA-Z\d!@#\$%\^&\*]{8,16}$/;

function validateFirstName() {
    if (txtFirstName.value.trim() === '') {
        errorFirstName.innerHTML = 'First Name cannot be blank';
        return false;
    }

    else if (!regexName.test(txtFirstName.value)) {
        errorFirstName.innerHTML = 'First Name cannot contain any special characters or numbers';
        return false;
    }

    else if (txtFirstName.value.length < 3) {
        errorFirstName.innerHTML = 'First Name is too short (Minimum character length should be 3)';
        return false;
    }

    else if (txtFirstName.value.length > 20) {
        errorFirstName.innerHTML = 'First Name is too long (Maximum character length should be 20)';
        return false;
    }

    else {
        errorFirstName.innerHTML = '';
        return true;
    }
}

function validateLastName() {
    if (txtLastName.value.trim() === '') {
        errorLastName.innerHTML = 'Last Name cannot be blank';
        return false;
    }

    else if (!regexName.test(txtLastName.value)) {
        errorLastName.innerHTML = 'Last Name cannot contain any special characters or numbers';
        return false;
    }

    else if (txtLastName.value.length < 3) {
        errorFirstName.innerHTML = 'Last Name is too short (Minimum character length should be 3)';
        return false;
    }

    else if (txtLastName.value.length > 20) {
        errorFirstName.innerHTML = 'Last Name is too long (Maximum character length should be 20)';
        return false;
    }

    else {
        errorLastName.innerHTML = '';
        return true;
    }
}

function validateEmailId() {
    if (txtEmailId.value.trim() === '') {
        errorEmailId.innerHTML = 'Email Id cannot be blank';
        return false;
    }

    else if (!regexEmailId.test(txtEmailId.value)) {
        errorEmailId.innerHTML = 'Invalid Email Id';
        return false;
    }

    else {
        errorEmailId.innerHTML = '';
        return true;
    }
}

function validatePassword() {
    if (txtPassword.value.trim() === '') {
        errorPassword.innerHTML = 'Password cannot be blank';
        return false;
    }

    else if (!regexPassword.test(txtPassword.value)) {
        errorPassword.innerHTML = 'Invalid Password';
        return false;
    }

    else {
        errorPassword.innerHTML = '';
        return true;
    }
}

function validateConfirmPassword() {
    if (txtConfirmPassword.value.trim() === '') {
        errorConfirmPassword.innerHTML = 'Confirm Password cannot be blank';
        return false;
    }

    else if (txtConfirmPassword.value.trim() !== txtPassword.value.trim()) {
        errorConfirmPassword.innerHTML = 'Password and Confirm Password should match';
        return false;
    }

    else {
        errorConfirmPassword.innerHTML = '';
        return true;
    }
}

btnSignUp.addEventListener('click', onSignUp);
body.addEventListener('keypress', onSubmit);
flpProfilePic.addEventListener('change', onUploadProfilePic)