// Step-1 : Add Click Event Handler with the login Button
e.preventDefault()
document.getElementById('btn-submit').addEventListener('click', function login (e) {
    // Step-2 : get the email address inside the email input field
    // remember to use .value to get the text from input field
    // console.log('Please Login');

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step-3 : Get PassWord
    // --> set id on html element
    // --> get the elemenet
    // --> get the value form the element

    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value;


    // do not compare from client side

    // Step - 4 verify email and pass

    if (email === 'kawsar@gmail.com' && pass === '123') {
        // console.log('Valid User');
        window.location.href ='bank.html';
    }
    else {
        alert('Email: kawsar@gmail.com \nPassword: 123');
    }
})