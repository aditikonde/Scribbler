function openLoginForm() {
    // var x = document.getElementsByTagName("BODY")[0];
    // x.style.filter = "blur(3px) grayscale(90%)";

    // var y = document.getElementById('login-popup');
    // y.style.filter = "blur(0px) grayscale(0%)";

    document.body.classList.add("showLoginForm");

    // var z = document.querySelectorAll("div:not('#login-popup .modal-popup popup')");
    // z.style.filter = "blur(3px) grayscale(90%)";
}

function closeLoginForm() {
    // var x = document.getElementsByTagName("BODY")[0];
    // x.style.filter = "none";
    // var mainContainer = document.getElementsByClassName('main-container')[0];
    // mainContainer.classList.remove("showLoginForm");

    document.body.classList.remove("showLoginForm");
}

function openSignUpForm() {
    document.body.classList.add("showSignUpForm");
}

function closeSignUpForm() {
    document.body.classList.remove("showSignUpForm");
}

function openSignUp() {
    document.body.classList.remove("showLoginForm");
    openSignUpForm();
}

function createPost() {
    document.body.classList.add("showCreatePost");
}

function closeCreatePost() {
    document.body.classList.remove("showCreatePost");
}