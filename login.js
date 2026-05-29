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
/* =========================
   FORGOT PASSWORD SYSTEM
========================= */

let generatedOTP = "";
let recoveryEmail = "";

/* OPEN MODAL */
function openForgot() {

    document.getElementById("forgotModal")
        .style.display = "flex";

    resetForgotSteps();
}

/* CLOSE MODAL */
function closeForgot() {

    document.getElementById("forgotModal")
        .style.display = "none";

    resetForgotSteps();
}

/* RESET UI */
function resetForgotSteps() {

    document.getElementById("stepEmail")
        .style.display = "block";

    document.getElementById("stepOTP")
        .style.display = "none";

    document.getElementById("stepNewPass")
        .style.display = "none";

    document.getElementById("forgotEmail").value = "";
    document.getElementById("newPassword").value = "";

    clearOTP();
}

/* GENERATE OTP */
function generateOTP() {

    return Math.floor(
        100000 + Math.random() * 900000
    ).toString();
}

/* SEND OTP */
function sendOTP() {

    let email =
        document.getElementById("forgotEmail").value;

    let users =
        JSON.parse(localStorage.getItem("users")) || {};

    if (!users[email]) {

        return alert("Email not found!");
    }

    recoveryEmail = email;

    generatedOTP = generateOTP();

    /* SIMULATED OTP SEND */
    alert(
        "WHITE SECURITY OTP\n\n" +
        "Your recovery OTP is:\n\n" +
        generatedOTP
    );

    document.getElementById("stepEmail")
        .style.display = "none";

    document.getElementById("stepOTP")
        .style.display = "block";
}

/* MOVE OTP */
function moveOTP(el, index) {

    let boxes =
        document.querySelectorAll(".otp-box");

    if (el.value.length === 1) {

        if (index < boxes.length - 1) {

            boxes[index + 1].focus();
        }
    }
}

/* GET OTP */
function getOTP() {

    let otp = "";

    document.querySelectorAll(".otp-box")
        .forEach(box => {
            otp += box.value;
        });

    return otp;
}

/* CLEAR OTP */
function clearOTP() {

    document.querySelectorAll(".otp-box")
        .forEach(box => {
            box.value = "";
        });
}

/* VERIFY OTP */
function verifyOTPCode() {

    let otp = getOTP();

    if (otp.length !== 6) {

        clearOTP();

        return alert(
            "OTP must be 6 digits"
        );
    }

    if (otp !== generatedOTP) {

        clearOTP();

        return alert(
            "Wrong OTP"
        );
    }

    document.getElementById("stepOTP")
        .style.display = "none";

    document.getElementById("stepNewPass")
        .style.display = "block";
}

/* SAVE NEW PASSWORD */
function saveNewPassword() {

    let newPass =
        document.getElementById("newPassword").value;

    if (newPass.length < 6) {

        return alert(
            "Password too short"
        );
    }

    let users =
        JSON.parse(localStorage.getItem("users")) || {};

    users[recoveryEmail].password = newPass;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert(
        "Password updated successfully!"
    );

    closeForgot();
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

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});