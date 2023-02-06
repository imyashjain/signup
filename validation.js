export class Validation {
    static isAlphabet(){
        const regexName = /^[a-zA-Z]*$/;
    }

    static isNumeric(){
        
    }

    static isAlphanumric(){

    }

    static isValidEmail(){
        const regexEmailId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,4})$/;
        return regexEmailId.test(emailId);
    }

    static isValidPassword(){
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=^\S*$)[a-zA-Z\d!@#\$%\^&\*]{8,16}$/;
        return regexPassword.test(password);
    }
}