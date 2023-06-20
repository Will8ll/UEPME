<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data from the POST request
    $name = $_POST['name'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $idNumber = $_POST['idNumber'];

    // Email details
    $to = 'crs.thinktank@gmail.com';
    $subject = 'Contact Information';
    $message = "Name: $name\n";
    $message .= "First Name(s): $firstname\n";
    $message .= "Email: $email\n";
    $message .= "ID Number: $idNumber\n";

    // Send the email
    $result = mail($to, $subject, $message);

    // Check if the email was sent successfully
    if ($result) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
}
?>
