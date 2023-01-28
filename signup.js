const txtFirstName = document.getElementById('FirstName');
const txtLastName = document.getElementById('LastName');
const txtEmailId = document.getElementById('EmailId');
const txtPassword = document.getElementById('Password');
const txtConfirmPassword = document.getElementById('ConfirmPassword');
const btnSignUp = document.getElementById('btnSignUp');

const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmailId = document.getElementById("errorEmailId");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");

const users = [];

function onSignUp(){

    if(validateFirstName() & validateLastName() & validateEmailId() & validatePassword() & validateConfirmPassword()){
        const FirstName = txtFirstName.value;
        const LastName = txtLastName.value;
        const EmailId = txtEmailId.value;
        const Password = txtPassword.value;
        const ConfirmPassword = txtConfirmPassword.value;

        const user = {
            FirstName: FirstName,
            LastName: LastName,
            EmailId: EmailId
        }
        users.push(user);
        console.log(users);
    }
}

var returnValue = true;

function validateFirstName(){
    var regexFirstName = /^[a-zA-Z]*$/;

    if(txtFirstName.value.length < 3 & (!txtFirstName.value.length > 20) & txtFirstName.value === "" & regexFirstName.test(txtFirstName.value)){
        errorFirstName.innerHTML = "Invalid First Name";
        returnValue = false;
    }
}

function validateLastName(){
    var regexLastName = /^[a-zA-Z]{3-20}$/;

    if(!regexLastName.test(txtLastName.value)){
        errorLastName.innerHTML = 'Invalid Last Name';
        returnValue = false;
    }
}

function validateEmailId(){
    var regexEmailId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!regexEmailId.test(txtEmailId.value)){
        errorEmailId.innerHTML = 'Invalid Email Id';
        returnValue =  false;
    }
}

function validatePassword(){
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=^\S*$)[a-zA-Z\d!@#\$%\^&\*]{8,16}$/;

    if(!regexPassword.test(txtPassword.value)){
        errorPassword.innerHTML = 'Invalid Password';
        returnValue = false;
    }
}

function validateConfirmPassword(){
    if(txtConfirmPassword.value !== txtPassword.value){
        errorConfirmPassword.innerHTML = 'Password and Confirm Password should match';
        returnValue = false;
    }
}

btnSignUp.addEventListener('click', onSignUp);