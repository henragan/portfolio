const correctPassword = "checking you out??";

function checkPassword() {
  const userInput = document.getElementById("passwordInput").value;
  const errorText = document.getElementById("error");

  if (userInput === correctPassword) {
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    errorText.style.display = "block";
  }
}

window.addEventListener("load", () => {
  document.getElementById("passwordInput").focus();
});