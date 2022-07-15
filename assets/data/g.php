<?php 

echo "hello";

$name = $_POST["name"];
$email = $_POST["email"];
$desc = $_POST["Desc"];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  
  
  $subject = "From: $name <$email> \n  \"Body: $desc\"";
  
  $h = fopen('form.json','a');
  fwrite($h,$subject);

}


?>