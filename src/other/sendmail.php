<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // From one
    $mail->setFrom('lekhmanov.nik@mail.ru');
    // To one
    $mail->addAddress('info@webwizard66.ru');
    //Theme of message
    $mail->Subject = 'Заявка';

    //Subject of message
    // $body = '<h1>Hello super message!</h1>';


    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
    }

    if(trim(!empty($_POST['radio']))) {
        $body.= '<p><strong>Radio:</strong> '.$_POST['radio'].'</p>';
    }

    if(trim(!empty($_POST['select']))) {
        $body.= '<p><strong>Select:</strong> '.$_POST['select'].'</p>';
    }

    if(trim(!empty($_POST['description']))){
        $body.='<p><strong>Description:</strong> '.$_POST['description'].'</p>';
    }

    // //Add file
    // if(!empty($_FILES['image']['temp_name'])){
    //     //path to save file
    //     $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    //     //loading file
    //     if(copy($_FILES['image']['tmp_name'], $filePath)){
    //         $fileAttach = $filePath;
    //         $body.='<p><strong>Photo into</strong></p>';
    //         $mail->addAttachment($fileAttach);
    //     }
    // }

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Error';
    } else {
        $message = 'Message was send!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>