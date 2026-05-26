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

    window.location.href = "dashboard.html";
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