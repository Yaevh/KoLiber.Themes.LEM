<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$person = $_POST['person'];
$school = $_POST['school'];
$coordinator = $_POST['coordinator'];
$content = $_POST['content'];

$address = "kontakt@ekonomiadlamlodziezy.pl";
$title = "Zgłoszenie do projektu LEM";

$headers .= "MIME-Version: 1.0".PHP_EOL;
$headers .= "Content-Type: text/html; charset=utf-8".PHP_EOL;
$headers .= "From:  <". $email. ">";

$message = '';
$message = '

    <html>
        <body>
            <p>Imię i nazwisko: <strong>' . $name . '</strong> - <strong>' . $person . '</strong> </p>
            <p>Adres email: <strong>' . $email . '</strong></p>
            <p>Telefon kontaktowy: <strong>' . $phone . '</strong></p>
            <p>Szkoła: <strong>' . $school . '</strong></p>
            <p>Województwo: <strong>' . $coordinator . '</strong></p>
            <hr>
            <p>Treść wiadomości:</p>
            <p>' . $content . '</p>      
        </body>    
    </html>

';

$success = mail($address, $title, $message, $headers);

if ( $success ){
    print "<meta http-equiv=\"refresh\" content=\"0;URL=form.html\">";
} else {
    print "<meta http-equiv=\"refresh\" content=\"0;URL=form.html\">";
}