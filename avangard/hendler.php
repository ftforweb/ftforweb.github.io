<?php
    $name=$_POST['name'];
    $mail=$_POST['mail'];
    $phone=$_POST['phone'];
    $to = "sarafan.bz@yandex.ru";/*sarafan.bz@yandex.ru*/
    $subject = "Новая заявка с сайта FMCG";
    if($name){
        $message = "<br>Имя: " . $name . "<br>E-mail: " . $mail . "<br>Телефон: " . $phone;
    }
    else $message = "<br>Имя: " . $name . "<br>E-mail: " . $mail . "<br>Телефон:<br>" . $phone;
    
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: wth\r\n";
    //Если форма была отправлена, то выводим ее содержимое на экран
    

        mail($to, $subject, $message, $headers);
           
    
?>
