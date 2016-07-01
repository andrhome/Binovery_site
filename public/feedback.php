<?php

$to="cm@binovery.com, tehnolog_new@mail.ru";/*Your Email*/

$subject="Message from web-site: binovery.com";

$date=date("l, F jS, Y");
$time=date("h:i A");

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$message=$_REQUEST['message'];
// $telephone=$_REQUEST['telephone'];


$msg  = "Nomi: $name\nE-mail: $email\nMessagio: $message\nMessagio inviato:  $date, hour: $time.\n";

if(mail($to,$subject,$msg,"From:".$email)) {
echo "1";
}


?>