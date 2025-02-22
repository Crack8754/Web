const eyeOff = document.getElementById("eye2");
const eyeOn = document.getElementById("eye");
const password = document.getElementById("password")
const emailInput = document.getElementById("email");
const signUpButton = document.querySelector(".signup-form button");

const dataUser = {
    email: "",
    password: ""
};


function togglePassword() {
    if (password.type === "password") {
        password.type = "text"; 
        eyeOff.style.opacity = "0";  
        eyeOn.style.opacity = "1"; 
    } else {
        password.type = "password"; 
        eyeOn.style.opacity = "0";  
        eyeOff.style.opacity = "1"; 
    }
}

emailInput.addEventListener("input", (event) => {
    dataUser.email = event.target.value;
});


signUpButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    console.log("Введений email:", dataUser.email);
});

eyeOn.addEventListener("click", togglePassword);
eyeOff.addEventListener("click", togglePassword);