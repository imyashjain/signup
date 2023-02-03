export class Validation {
    static isAlphabet() {

    }

    static isNumeric() {

    }

    static isAlphanumric() {

    }

    static isValidEmail(emailId) {
        const regexEmailId = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,4})$/;
        return regexEmailId.test(emailId);
    }

    static isValidPassword() {

    }
}