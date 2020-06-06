<?php

if(!isset($_POST['submit']))
{
    echo "error; necesitas envíar el formulario";
}

$name = $_POST['sender'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'info@danielledistribuidora.com.ar';
$email_subject = "Nuevo envio de contacto";
$email_body = "Has recibido un nuevo mail de: $name.\n".
    "Direccion de correo: $visitor_email\n".
    "Mensaje: \n $message\n".

$to = "info@danielledistribuidora.com.ar";
$headers = "From: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);

header('Location: index.html');
?>
