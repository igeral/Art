<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  $country = $_POST['country'];
  $reason = $_POST['reason'];
  $message = $_POST['message'];
  $method = $_POST['method'];
  // $myData = $_POST['myData'];

  $subject = "New Contact Details from Damson Art";
  $mailheader = "From: " . $firstname . "<" . $email . ">\r\n";
  $body = "First Name: " . $firstname . "\r\nLast name: " . $lastname . "\r\nEmail: " . $email . "\r\nCountry: " . $country . "\r\nContact Reason: " . $reason . "\r\nMessage: " . $message . "\r\nHow did you hear about us: " . $method;
  $recipient = "damsonart@damsonsart.com";

  if (mail($recipient, $subject, $body, $mailheader)) {
    // Email sent successfully
    $response = array(
      'status' => 'success',
      'message' => 'Dear Customer, thanking you for visiting our website, We confirm receipt of your request which will be managed as soon as possible. Best regards Damson Art.'
    );
    // if ($myData === 'it') {
    //   $response = array(
    //     'status' => 'success',
    //     'message' => 'Gentile cliente, ringraziando per aver visitato il nostro sito internet, confermiamo la ricezione della sua richiesta la quale verrà gestita nel più breve tempo possibile. Cordiali saluti Spagnol Mobili srl.'
    //   );
    // } else if ($myData === 'en') {
    //   $response = array(
    //     'status' => 'success',
    //     'message' => 'Dear Customer, thanking you for visiting our website, We confirm receipt of your request which will be managed as soon as possible. Best regards Spagnol Mobili srl.'
    //   );
    // } else if ($myData === 'ru') {
    //   $response = array(
    //     'status' => 'success',
    //     'message' => 'Уважаемый клиент, благодарим Вас за посещение нашего веб-сайта, Мы подтверждаем получение вашего запроса, который будет обработан как можно скорее. С наилучшими пожеланиями Spagnol Mobili srl.'
    //   );
    // } else if ($myData === 'es') {
    //   $response = array(
    //     'status' => 'success',
    //     'message' => 'Estimado cliente, gracias por visitar nuestro sitio web, Confirmamos la recepción de su solicitud que será gestionada a la mayor brevedad. Atentamente Spagnol Mobili srl.'
    //   );
    // } else if ($myData === 'de') {
    //   $response = array(
    //     'status' => 'success',
    //     'message' => 'Lieber Kunde, Vielen Dank für Ihren Besuch auf unserer Website, Wir bestätigen den Eingang Ihrer Anfrage, die schnellstmöglich bearbeitet wird. Mit freundlichen Grüßen Spagnol Mobili srl.'
    //   );
    // } else{
    //   $response = array(
    //     'status' => 'success',
    //     'message' => 'Gentile cliente, ringraziando per aver visitato il nostro sito internet, confermiamo la ricezione della sua richiesta la quale verrà gestita nel più breve tempo possibile. Cordiali saluti Spagnol Mobili srl.'
    //   );
    // }
  } else {
    // Error occurred while sending email
    $response = array(
      'status' => 'error',
      'message' => 'Error occurred while submitting the email.'
    );
  }

  // Return the response as JSON
  header('Content-Type: application/json');
  echo json_encode($response);
  exit;
} else {
  // Handle case when form is accessed directly without POST method
  // Redirect or display an error message
}
?>
