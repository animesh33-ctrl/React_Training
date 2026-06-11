const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

// Show Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector("small").innerText = message;
}

// Show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    formControl.querySelector("small").innerText = "Success";
}

// Email Validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form Submit
form.addEventListener("submit", function(e) {

    e.preventDefault();

    // Name
    if(name.value.trim() === ""){
        showError(name,"Name is Required");
    }
    else{
        showSuccess(name);
    }

    // Email
    if(!isValidEmail(email.value.trim())){
        showError(email,"Email is Invalid");
    }
    else{
        showSuccess(email);
    }

    // Password
    if(password.value.length < 6){
        showError(password,"Password must be 6+ characters");
    }
    else{
        showSuccess(password);
    }

    // Confirm Password
    if(password.value !== confirm.value){
        showError(confirm,"Passwords do not match");
    }
    else{
        showSuccess(confirm);
    }

});


const togglePass = document.getElementById("togglePass");
const toggleConfirm = document.getElementById("toggleConfirm");

togglePass.addEventListener("click", function(){

    if(password.type === "password"){
        password.type = "text";
        togglePass.innerHTML = "🙈";
    }
    else{
        password.type = "password";
        togglePass.innerHTML = "👁";
    }

});

toggleConfirm.addEventListener("click", function(){

    if(confirm.type === "password"){
        confirm.type = "text";
        toggleConfirm.innerHTML = "🙈";
    }
    else{
        confirm.type = "password";
        toggleConfirm.innerHTML = "👁";
    }

});