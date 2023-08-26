let signUpButton = document.querySelector(".main-body button");
let main_body = document.getElementById('main-body');
let profile = document.getElementById('profile');
profile.style.display = "none";
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let error = document.getElementById('error');
let success = document.getElementById('success');



class User {
    name;
    email;
    password;
    accessToken;
    constructor(name, email, password, accessToken) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.accessToken = accessToken;
    }
}

signUpButton.addEventListener('click', (event) => {
    event.preventDefault();

    // console.log(name, email, password, confirmPassword);

    if (name.value.trim() == "" || email.value.trim() == "" || password.value.trim() == "" || confirmPassword.value.trim() == "") {
        error.style.display = 'block';
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        window.alert("Both the password should be same");
        password.value = "";
        confirmPassword.value = "";
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        success.style.display = 'block';
        let token = generateAccessToken();

        let newUser = new User(name.value.trim(), email.value.trim(), password.value.trim(), token);
        localStorage.setItem("person", JSON.stringify(newUser));

        setInterval(() => {
            main_body.style.display = "none";
        }, 1000);

        profile.style.display = 'block';

        let displayName = document.getElementById('display-name');
        let displayMail = document.getElementById('display-email');
        let displayPassword = document.getElementById('display-password');

        let savedData = JSON.parse(localStorage.getItem('person'));
        console.log(savedData);
        displayName.innerText = `Full Name : ${savedData.name}`;
        displayMail.innerText = `Email : ${savedData.email}`;
        displayPassword.innerText = `Password : ${savedData.password}`;


    }
});

let logoutButton = document.getElementById("logout");
logoutButton.addEventListener('click', (event) => {
    profile.style.display = "none";
    main_body.style.display = "block";
    localStorage.clear();
});

let nav_signup = document.getElementById('nav-signup');
let nav_profile = document.getElementById('nav-profile');


nav_profile.addEventListener('click', () => {
    let savedData = JSON.parse(localStorage.getItem('person'));


    if (savedData) {

        main_body.style.display = 'none';
        profile.style.display = 'block';

        let displayName = document.getElementById('display-name');
        let displayMail = document.getElementById('display-email');
        let displayPassword = document.getElementById('display-password');

        console.log(savedData);
        displayName.innerText = `Full Name : ${savedData.name}`;
        displayMail.innerText = `Email : ${savedData.email}`;
        displayPassword.innerText = `Password : ${savedData.password}`;
    } else {

        window.alert("Token not available");
    }
});

nav_signup.addEventListener('click', (event) => {
    event.preventDefault();
     window.location.reload();
});

function generateAccessToken() {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWQYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";

    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * text.length);
        token += text.charAt(randomIndex);
        // console.log(randomIndex);
    }
    console.log(token);

    return token;
}

// localStorage.clear();