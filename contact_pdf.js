window.addEventListener("DOMContentLoaded", function() {
  // Retrieve form data from local storage
  var name = localStorage.getItem("name");
  var firstname = localStorage.getItem("firstname");
  var email = localStorage.getItem("email");
  var message = localStorage.getItem("message");
  
  // Generate a random ID number
  var idNumber = generateIDNumber(10);
  
  // Populate contact information and ID number
  document.getElementById("idNumberValue").textContent = "ID :" + idNumber;
  document.getElementById("nameValue").textContent = "NOM : " + name;
  document.getElementById("firstnameValue").textContent = "PRÉNOM(S) : " + firstname;
  document.getElementById("messageValue").textContent = "" + message;
  document.getElementById("emailValue").textContent = "" + email;
  
  
  // Clear local storage
  localStorage.clear();

 
});


function generateIDNumber(length) {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var idNumber = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    idNumber += characters.charAt(randomIndex);
  }
  
  return idNumber;
}
