<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set the recipient email address
    $to = "yansiteresponses@gmail.com";

    // Set the subject of the email
    $subject = "Media Submission";

    // Set the sender email address
    $from = "sharedMedia@areyan.in";

    // Get the form data
    $response = $_POST['response']; // Adjusted variable name to match the form field name

    // Build the email message
    $body = "Response:\n$response"; // Adjusted message to use the correct variable name

    // Set additional headers
    $headers = "From: $from" . "\r\n" .
               "Reply-To: $from" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
      
    } else {
        
    }
} else {
   
}
?>
