
const inputFn = document.getElementById("fname");
const inputLn = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const inputPass = document.getElementById("password");
const form = document.getElementById("form");

const expresion = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$/,
    name: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
}


const errorFn = document.getElementById("error-fn");
const errorFnImg = document.getElementById("fnameimg");

const errorLn = document.getElementById("error-ln");
const errorLnImg = document.getElementById("lnameimg");

const errorEmail = document.getElementById("error-email");
const errorEmailImg = document.getElementById("emailimg");

const errorPass = document.getElementById("error-pass");
const errorPassImg = document.getElementById("passimg");



const validarForm = (e) => {
    switch (e.target.name) {
        case "email":
        if (expresion.email.test(e.target.value)){
            errorEmail.classList.add("hidden");
            errorEmailImg.classList.add("error");

        } else {
            errorEmail.classList.remove("hidden");
            errorEmailImg.classList.remove("error");
        }
        break;
    }
}

inputEmail.addEventListener("keyup", validarForm);
inputEmail.addEventListener("blur", validarForm);

form.addEventListener("submit", e => {
    e.preventDefault()
    if (inputFn.value.length == 0) {
        errorFnImg.classList.remove("error");
        errorFn.classList.remove("hidden");
    } else {
        errorFnImg.classList.add("error");
        errorFn.classList.add("hidden");
    }

    if (inputLn.value.length == 0) {
        errorLnImg.classList.remove("error");
        errorLn.classList.remove("hidden");
    } else {
        errorLnImg.classList.add("error");
        errorLn.classList.add("hidden");
    }

    if (inputEmail.value.length == 0) {
        errorEmailImg.classList.remove("error");
        errorEmail.classList.remove("hidden");

    } else {
        errorEmailImg.classList.add("error");
        errorEmail.classList.add("hidden");
    }

    if (inputPass.value.length == 0) {
        errorPassImg.classList.remove("error");
        errorPass.classList.remove("hidden");

    } else {
        errorPassImg.classList.add("error");
        errorPass.classList.add("hidden");
    }
});
