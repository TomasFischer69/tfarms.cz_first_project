<?php 

if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    

    $mailTo = "fischer.tomas20@gmail.com";
    $headers = "FROM: " .$mailFrom;
    $txt = "Obdržel jsi email od: ".$name."\n\n".$email."\n\n".$message;


    if(mail($mailTo, $headers, $txt)) {
        echo "<h1>Děkujeme za objednávku"." ".$name.", Budeme Vás kontaktovat</h1>";
        

    }
    else {
        echo "Nečo je špatně";
    }

}

?>