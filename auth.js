// Redirect to login if not logged in
function checkAuth() {
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "login.html";
    }
}

// Register
function registerUser() {
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if (email === "" || password === "") {
        alert("All fields required");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
}

// Login
function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "index.html"; // go to your main app
    } else {
        alert("Invalid credentials");
    }
}

// Logout function (optional)
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
