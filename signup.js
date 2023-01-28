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

var regexName = /^[a-zA-Z]*$/;
var regexEmailId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=^\S*$)[a-zA-Z\d!@#\$%\^&\*]{8,16}$/;

function validateFirstName(){
    
    if(txtFirstName.value.trim() === ''){
        errorFirstName.innerHTML = 'First Name should not be blank';
        return false;
    }

    else if(!regexName.test(txtFirstName.value)){
        errorFirstName.innerHTML = 'First Name should not contain any special characters or numbers';
        return false;
    }

    else if(txtFirstName.value.length < 3){
        errorFirstName.innerHTML = 'First Name too short (Minimum character length should be 3)';
        return false;
    }

    else if(txtFirstName.value.length > 20){
        errorFirstName.innerHTML = 'First Name too long (Maximum character length should be 20)';
        return false;
    }

    else{
        errorFirstName.innerHTML = '';
        return true ;
    }
}

function validateLastName(){

    if(txtLastName.value.trim() === ''){
        errorLastName.innerHTML = "Last Name should not be blank";
        return false;
    }

    else if(!regexName.test(txtLastName.value)){
        errorLastName.innerHTML = 'Last Name should not contain any special characters or numbers';
        return false;
    }

    else if(txtLastName.value.length < 3){
        errorFirstName.innerHTML = 'Last Name too short (Minimum character length should be 3)';
        return false;
    }

    else if(txtLastName.value.length > 20){
        errorFirstName.innerHTML = 'Last Name too long (Maximum character length should be 20)';
        return false;
    }

    else{
        errorLastName.innerHTML = '';
        return true ;
    }
}

function validateEmailId(){

    if(txtEmailId.value.trim() === ''){
        errorEmailId.innerHTML = 'Email Id should not be blank';
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
        errorPassword.innerHTML = 'Password should not be blank';
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
        errorConfirmPassword.innerHTML = 'Confirm Password should not be blank';
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