import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAEbGEtWqh9sKKBoKF6UxmxDb_-yo9_e_k",
    authDomain: "admin-login-hajauli.firebaseapp.com",
    projectId: "admin-login-hajauli",
    storageBucket: "admin-login-hajauli.firebasestorage.app",
    messagingSenderId: "759175560423",
    appId: "1:759175560423:web:c25d9fc081a7407966f642",
    measurementId: "G-Z99DNTZY5H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("login-message"); 
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";

    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            loginMessage.textContent = "Login Successful!...";

            setTimeout(() => {
                window.location.href = "dashboard/index.html"; // Redirect to Dashboard
            }, 1500);
        })
        .catch((error) => {
            const errorMessage = error.message;

            if (errorMessage.includes("auth/missing-password")) {
                passwordError.textContent = "Enter Password";
            } else if (errorMessage.includes("auth/invalid-email")) {
                emailError.textContent = "Enter Email";
            } else if (errorMessage.includes("auth/invalid-credential")) {
                loginMessage.textContent = "Invalid Email/Password. Try Again!";
            }
        });
};
