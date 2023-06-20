window.addEventListener("DOMContentLoaded", function() {
  // Retrieve form data from local storage
  var name = localStorage.getItem("name");
  var firstname = localStorage.getItem("firstname");
  var email = localStorage.getItem("email");
  var media = localStorage.getItem("media");
  
  // Generate a random ID number
  var idNumber = generateIDNumber(10);
  
  // Populate contact information and ID number
  document.getElementById("idNumberValue").textContent = "ID :" + idNumber;
  document.getElementById("nameValue").textContent = "NOM : " + name;
  document.getElementById("firstnameValue").textContent = "PRÉNOM(S) : " + firstname;
  document.getElementById("mediaValue").textContent = "" + media;
  document.getElementById("emailValue").textContent = "" + email;
  
  
  // Clear local storage
  localStorage.clear();

  // Send the information to the email
  sendContactInfo(name, firstname, email, idNumber);
});

function sendContactInfo(name, firstname, email, idNumber) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.success) {
              console.log("Email sent successfully.");
          } else {
              console.error("Failed to send email:", response.message);
          }
      }
  };
  var data = "name=" + encodeURIComponent(name) +
             "&firstname=" + encodeURIComponent(firstname) +
             "&email=" + encodeURIComponent(email) +
             "&idNumber=" + encodeURIComponent(idNumber);
  xhr.send(data);
}

function generateIDNumber(length) {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var idNumber = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    idNumber += characters.charAt(randomIndex);
  }
  
  return idNumber;
}
