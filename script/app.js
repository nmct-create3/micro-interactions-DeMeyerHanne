function handleFloatingLabel() {
   
}

const handlePasswordSwitcher = function() {
    const passwordInput = document.querySelector('.js-password-input');
    const passwordToglle = document.querySelector('.js-password-toggle');
    
    const passwordOptions = ['text', 'password'];

    // simpele zelfcontrole
    if (!passwordInput || !passwordToglle) {
        console.error('De classes werden niet gevonden', passwordInput , passwordToglle);
        return;
    }

    // we gaan luisteren of er geklikt wordt op de checkbox (oogje)
    passwordToglle.addEventListener('change', function() {
        // als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa
        passwordInput.type = passwordOptions[+this.checked];

            // zelfde idee, maar niet goed genoeg
        // if(passwordInput.type == 'password') {
        //     passwordInput.type = 'text'
        // } else {
        //     passwordInput.type = 'password';
        // }
    })
}

const getDOMElements = function() {
    let email = {},
        password = {},
        signInButton ;

    // todo
    email.field = document.querySelector('.js-email-field').querySelector.apply; 
    password.field = document.querySelector('.js-password-field').querySelector.apply;
    
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleLoginVallidation();
    getDOMElements();
});