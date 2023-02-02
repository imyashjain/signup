const txtFirstName = document.getElementById('firstName');
const txtLastName = document.getElementById('lastName');
const txtEmailId = document.getElementById('emailId');
const txtPassword = document.getElementById('password');
const txtConfirmPassword = document.getElementById('confirmPassword');
const btnSignUp = document.getElementById('btnSignUp');

const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmailId = document.getElementById("errorEmailId");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");

const users = [];

function onSignUp(){

    if(validateFirstName() & validateLastName() & validateEmailId() & validatePassword() & validateConfirmPassword()){
        const firstName = txtFirstName.value;
        const lastName = txtLastName.value;
        const emailId = txtEmailId.value;
        const password = txtPassword.value;
        const confirmPassword = txtConfirmPassword.value;

        const user = {
            FirstName: firstName,
            LastName: lastName,
            EmailId: emailId
        }
        users.push(user);
        console.log(users);
    }
}

var regexName = /^[a-zA-Z]*$/;
var regexEmailId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=^\S*$)[a-zA-Z\d!@#\$%\^&\*]{8,16}$/;

function validateFirstName(){
    
    if(txtFirstName.value.trim() === ''){
        errorFirstName.innerHTML = 'First Name cannot be blank';
        return false;
    }

    else if(!regexName.test(txtFirstName.value)){
        errorFirstName.innerHTML = 'First Name cannot contain any special characters or numbers';
        return false;
    }

    else if(txtFirstName.value.length < 3){
        errorFirstName.innerHTML = 'First Name is too short (Minimum character length should be 3)';
        return false;
    }

    else if(txtFirstName.value.length > 20){
        errorFirstName.innerHTML = 'First Name is too long (Maximum character length should be 20)';
        return false;
    }

    else{
        errorFirstName.innerHTML = '';
        return true ;
    }
}

function validateLastName(){

    if(txtLastName.value.trim() === ''){
        errorLastName.innerHTML = 'Last Name cannot be blank';
        return false;
    }

    else if(!regexName.test(txtLastName.value)){
        errorLastName.innerHTML = 'Last Name cannot contain any special characters or numbers';
        return false;
    }

    else if(txtLastName.value.length < 3){
        errorFirstName.innerHTML = 'Last Name is too short (Minimum character length should be 3)';
        return false;
    }

    else if(txtLastName.value.length > 20){
        errorFirstName.innerHTML = 'Last Name is too long (Maximum character length should be 20)';
        return false;
    }

    else{
        errorLastName.innerHTML = '';
        return true ;
    }
}

function validateEmailId(){

    if(txtEmailId.value.trim() === ''){
        errorEmailId.innerHTML = 'Email Id cannot be blank';
        return false;
    }

    else if(!regexEmailId.test(txtEmailId.value)){
        errorEmailId.innerHTML = 'Invalid Email Id';
        return false;
    }

    else{
        errorLastName.innerHTML = '';
        return true ;
    }
}

function validatePassword(){
    
    if(txtPassword.value.trim() === ''){
        errorPassword.innerHTML = 'Password cannot be blank';
        return false;
    }

    else if(!regexPassword.test(txtPassword.value)){
        errorPassword.innerHTML = 'Invalid Password';
        return false;
    }

    else{
        errorLastName.innerHTML = '';
        return true ;
    }
}

function validateConfirmPassword(){

    if(txtConfirmPassword.value.trim() === ''){
        errorConfirmPassword.innerHTML = 'Confirm Password cannot be blank';
        return false;
    }
    
    else if(txtConfirmPassword.value.trim() !== txtPassword.value.trim()){
        errorConfirmPassword.innerHTML = 'Password and Confirm Password should match';
        return false;
    }

    else{
        errorLastName.innerHTML = '';
        return true ;
    }
}

btnSignUp.addEventListener('click', onSignUp);