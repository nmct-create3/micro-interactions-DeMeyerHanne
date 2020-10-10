// 2. Globale variabelen voor later gebruik
let email = {},
    password = {},
    signInButton;


// HELPER FUNCTIONS
const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

// 3. ophalen dom elementen
const getDOMElements = function() {
    email;
    // 4. wat ophalen voor het emailadres
    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    console.log(email);

    // 5. wat ophalen voor het password
    password.field = document.querySelector('.js-password-field');
    password.errorMessage = document.querySelector('.js-password-error-message');
    password.input = document.querySelector('.js-password-input');
    console.log(password);

    // 6. ophalen vd button
    signInButton = document.querySelector('.js-sign-in-button');
};

// 8. hier plaatsen we de has-error class op onze field
const addErrors = function(formField, errorField, errorMessage) {
    formField.classList.add('has-error');
    errorField.style.display = 'block';
    errorField.innerHTML = errorMessage;
}

// 9. hier gaan we de has-error class weer weg doen van onze field
const removeErrors = function(formField, errorField) {
    formField.classList.remove('has-error');
    // NOG TODO: toggle dit met een class (u-block / u-none)
    errorField.style.display = 'none';
}

// 10. named function gaan uitwerken
const doubleCheckEmailAddress = function() {
    if (!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)) {
        // we willen dat het niet leeg is en wel een valid email adres is dan is het in orde
        removeErrors(email.field, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAddress);
    } else {
        addErrors(email.field, email.errorMessage, 'The email is incorrect');
    }
};

// 7. todo: maak een functie enableListener
const enableListeners = function() {
    // 8. hierin komen drie listeners: voor email- en wachtwoordvelden, click-event vd knop
    email.input.addEventListener('blur', function() {
        if (isEmpty(email.input.value) && !isValidEmailAddress(email.input.value)) {
            addErrors(email.field, email.errorMessage, 'This field is required');  // add errors op op email field

            // 9.     ZET GEEN RONDE HAAKJES ROND EEN NEMED (EVENT) FUNCTION (dus hier niet rond doublecheck...)
            email.input.addEventListener('input', doubleCheckEmailAddress);
        } else {
            // als het veld leef is, dan doen we de checks weg
            if (isEmpty(email.input.value)) { 
                removeErrors(email.field, email.errorMessage);    // remove errors op email field
            // als het ok is, dan doen we deze weg
                email.input.removeEventListener('input', doubleCheckEmailAddress);
            }
        }
    });

    password.input.addEventListener('blur', function() {})

    signInButton.addEventListener('click', function() {})
}


document.addEventListener('DOMContentLoaded', function() {
    // 1. werkt deze file wel? Wordt het ingeladen in de console?
    console.info("Dom is ready 🎉");
    getDOMElements();   // vergeet dit niet !!!
    enableListeners();
});
