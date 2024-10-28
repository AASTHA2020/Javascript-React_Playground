// Registration ke baad email aur password store karne ke liye variables
let registeredEmail = "";
let registeredPassword = "";
let isLoginMode = false; // Yeh check karta hai ki hum Login mode mein hain ya Register mode mein

// "Register" button pe click event listener lagate hain
document.getElementById("register-btn").addEventListener("click", function () {
  // Input elements ko select karte hain
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Error aur success messages ke elements ko select karte hain
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("success-message");
  const registerBtn = document.getElementById("register-btn");

  // Har click ke baad previous error aur success messages ko reset karte hain
  usernameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  successMessage.style.display = "none";

  // Agar hum Login mode mein hain
  if (isLoginMode) {
    // Check karte hain ki entered email aur password match karte hain registered details se
    if (email.value.trim() === registeredEmail && password.value.trim() === registeredPassword) {
      // Agar email aur password match karte hain, to "Login Successful" message show karte hain
      successMessage.textContent = "Login Successful!";
      successMessage.style.display = "block";
    } else {
      // Agar email ya password galat hai, to error message show karte hain
      emailError.textContent = "Invalid email or password.";
      emailError.style.display = "block";
      passwordError.textContent = "Invalid email or password.";
      passwordError.style.display = "block";
    }
    return; // Login mode ke baad yaha return karte hain taaki aage code execute na ho
  }

  // Agar Registration mode mein hain, to inputs ki validation check karte hain
  let isValid = true; // Is variable se validation status track karte hain

  // Username validation - agar username empty hai to error show karte hain
  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required.";
    usernameError.style.display = "block";
    isValid = false;
  }

  // Email validation - agar email empty hai to error show karte hain
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailError.style.display = "block";
    isValid = false;
  }

  // Password validation - agar password 6 characters se kam hai to error show karte hain
  if (password.value.trim().length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    passwordError.style.display = "block";
    isValid = false;
  }

  // Agar saare inputs valid hain, to registration successful hota hai
  if (isValid) {
    // Email aur password ko store karte hain future login ke liye
    registeredEmail = email.value.trim();
    registeredPassword = password.value.trim();

    // Registration success message show karte hain
    successMessage.textContent = "Registration Successful!";
    successMessage.style.display = "block";

    // Button ka text "Login" mein change karte hain taaki user login kar sake
    registerBtn.textContent = "Login";
    isLoginMode = true; // isLoginMode ko true set karte hain taaki hum login state mein chale jayein

    // Form ke inputs clear karte hain login ke liye
    username.value = "";
    email.value = "";
    password.value = "";
  }
});
