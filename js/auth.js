var phoneInput = document.getElementById("phone");
var phoneMask = IMask(phoneInput, {
    mask: "+{7} (000) 000-00-00",
});
var emailInput = document.getElementById("email");
var emailMask = IMask(emailInput, {
    mask: /^\S*@?\S*$/,
});

const regForm = document.getElementById("register");
const authForm = document.getElementById("auth");
const switchAuthButton = document.querySelector(".switchAuthButton");
const switchRegButton = document.querySelector(".switchRegButton");

switchAuthButton.addEventListener("click", function () {
    authForm.style.display = "flex";
    regForm.style.display = "none";
});
switchRegButton.addEventListener("click", function () {
    authForm.style.display = "none";
    regForm.style.display = "flex";
});
