// select form by id
const registerForm = document.querySelector('#register-form');

// handle form submit event alt 1
registerForm.addEventListener('submit', function (event) {
    console.log(event.target);
    event.preventDefault();
    // collect form data
    const formData = new FormData(registerForm);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // save user information
    // send confirmation email
    // display success message
    const messageH1 = document.querySelector('#message')
    messageH1.textContent = 'Account registered successfully!';
});


// handle form submit event alt2
// registerForm.onsubmit = function () {
// collect username
// collect email
// collect password
// save user information
// send confirmation email
// }


// age variable
const age = 44;

// square of age
function squareAge(age) {
    const squareAge = age ** 2;
    return squareAge;
}


// function to get full name
function fullName(firstName, lastName) {
    // return firstName + lastName; - early days way of getting full name
    return `${firstName} ${lastName}`;

}

const myFullName = fullName('Romeo', 'Asante')
