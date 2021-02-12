function openLoginForm() {
    document.body.classList.add("showLoginForm");
}

function closeLoginForm() {
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