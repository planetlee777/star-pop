const correctUsername = "leetheplanet";
const correctPassword = "optimuspr!m3";

function login() {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

document.getElementById("input").addEventListener("submit", function(event) {
  event.preventDefault();
  login();
});