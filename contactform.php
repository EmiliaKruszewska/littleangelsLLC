<?php

if (isset($_POST['submit'])){
    $name = $_POST['your-name'];
    $subject = $_POST['your-subject'];
    $mailFrom = $_POST['your-email'];
    $message = $_POST['message'];
    $phone = $_POST['your-phone'];

    $mailTo = "emikruszewskaa@gmail.com";
    $headers = "From: " .$mailFrom;
    $txt = "You have receiver an e-mail from ".$name.". \n\n phone: ".$phone.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html");
}