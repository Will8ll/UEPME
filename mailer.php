<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "info.uspme@gmail.com"; // Replace with your email address

  // Get form data
  $firstName = $_POST["firstName"];
  $lastName = $_POST["lastName"];
  $email = $_POST["email"];
  $title = $_POST["title"];

  // Create email content
  $subject = "New Form Submission";
  $message = "First Name: $firstName\n";
  $message .= "Last Name: $lastName\n";
  $message .= "Email: $email\n";
  $message .= "Title: $title\n";

  // Set additional headers
  $headers = "From: $email" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";

  // Send email
  $success = mail($to, $subject, $message, $headers);
  
  if ($success) {
    echo "Thank you for your submission!";
  } else {
    echo "Oops! An error occurred. Please try again.";
  }
} else {
  echo "Invalid request.";
}
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
