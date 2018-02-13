<?php 

$mail = $_POST['email'];
$rules = $_POST['legal'];

if(isset($_POST['legal'])) {
    $send = true;
}
else {
	$send = false;
}


if(filter_var($mail, FILTER_VALIDATE_EMAIL) == false || $send == false) {
	exit;
}
else {
	$to = "mateusz.adam.pawlik@gmail.com";
    $subject = $mail;
    $message = $mail;
    $headers = "From: $mail".PHP_EOL."Reply-To: $to".PHP_EOL."Content-type: text/plain; charset=iso-8859-2";

    if(mail($to, $subject, $message, $headers)) {
    	echo 'success';
	}
	else {
		echo 'failed';
	}
}

?>