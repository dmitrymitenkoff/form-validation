// pulls all dom elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password");

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// event listener on the form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (username.value === "") {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
        showError(email, "Email is not valid");
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "Password 2 is required")
    } else {
        showSuccess(password2);
    }
});