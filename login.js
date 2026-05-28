function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[email]) {
        return alert("Account not found");
    }

    if (users[email].password !== password) {
        return alert("Wrong password");
    }

    localStorage.setItem("currentUser", email);

    alert("Login Success!");

    window.location.href = "dashboard.html";
}

/* OPEN MODAL */
function openForgot() {
    document.getElementById("forgotModal").style.display = "flex";
}

/* CLOSE MODAL */
function closeForgot() {
    document.getElementById("forgotModal").style.display = "none";
}

/* RESET PASSWORD */
function resetPassword() {

    let email = document.getElementById("forgotEmail").value;

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (!users[email]) {
        return alert("Email not found!");
    }

    let newPassword = prompt("Enter your new password");

    if (!newPassword) {
        return alert("Password reset cancelled");
    }

    users[email].password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password updated successfully!");

    closeForgot();
}

function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) return alert("Fill all fields");

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
        return alert("Account already exists!");
    }

    users[email] = {
        password: password,
        pin: pin,
        balance: 0,
        transactions: []
    };

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created!");
    window.location.href = "index.html";
}