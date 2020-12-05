<?php
ini_set('display_errors', 0);
header('Access-Control-Allow-Origin*');
header('Content-Type: application/json; charset=UTF=8');
$results = [];
$visitor_name = "";
$visitor_email = "";
$visitor_message = "";

// 1. Check the submission --> Validate the data [Is there "non-mailable" items?]
// $results = $_POST;

if (empty($_POST['name']) || empty($_POST['email'])) {
    $results['name'] = '* Full name is required';
    $results['email'] = '* Email is required';
    $results['message'] = '* required field';
    echo json_encode($results);
    return;
}

if (isset($_POST['name'])) {
    $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['email'])) {
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
}

if (!$visitor_email) {
    $results['email'] = '* Email is not valid';
    $results['message'] = '* Email is not valid';
    echo json_encode($results);
    return;
}

if (isset($_POST['message'])) {
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
}

// if(empty($_POST['g-recaptcha-response'])) {
//     $results['captcha'] = 'Captcha is required';
//     echo json_encode($results);
//     return;
// } else {
//     $secret_key = '6LfB4-UZAAAAAH4f5jT_SNjuPbwaxDd0OvcVPBeE';
//     $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret_key.'&response='.$_POST['g-recaptcha-response']);
//     $response_data = json_decode($response);

//     if (!$response_data -> success) {
//         $results['captcha'] = 'Captcha is not valid';
//         echo json_encode($results);
//         return;
//     }
// }

$results["name"] = $visitor_name;
$results["message"] = $visitor_message;

$email_subject = 'Jihee';
$email_recipient = 'jiheeyu95@gmail.com';

$email_message = sprintf('Name: %s, Email: %s, From: %s, Message: %s', $visitor_name, $visitor_email, $visitor_message);

$email_headers = array(
    //Best practice, but i may need you to have a mail set  up in noreply@yourdomain.ca 
    // 'From' => 'noreply@yourdomain.ca',
    // 'Reply-To' => $visitor_email

    //You can still use it, if above is too much work 
    'From' => $visitor_email
);

// 3. Send out the email [Send out the package]
$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);

// its breakpoint in PHP
if($email_result) {
    $results['message'] = sprintf('Thank you for contacting me, %s.', $visitor_name);
}else{
    $results['message'] = sprintf('We are sorry');
}

echo json_encode($results);