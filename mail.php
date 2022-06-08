<?php
include_once('index.html');

$message = null;
$error = null;

if(!empty($_POST['email']) && filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
    $message = 'Merci de vous êtes inscris à notre Newsletter !';
    echo '<div class="alert alert-success text-center">'.$message.'</div>';
} else {
    $error = 'L\'addresse email que vous avez renseignée n\'est pas valide';
    echo '<div class="alert alert-danger text-center">'.$error.'</div>'; 
}


