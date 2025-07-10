const correctPassword = "checking you out??";

function checkPassword() {
  const userInput = document.getElementById("passwordInput").value;
  const errorText = document.getElementById("error");

  if (userInput === correctPassword) {
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("main-content").classList.remove("blurred");
    document.getElementById("main-content").classList.add("unblurred");
  } else {
    errorText.style.display = "block";
  }
}

document.getElementById("passwordForm").addEventListener("submit", function(e) {
  e.preventDefault();
  checkPassword();
});