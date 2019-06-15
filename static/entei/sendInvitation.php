<?php
 header("Access-Control-Allow-Origin: *");

include('db.php');
$email=$_POST['email'];


$sql="insert into invitations (email) values('$email')";

if(mysqli_query($con,$sql))
{
    $lastId=mysqli_insert_id($con);
    $to_email =$email;
    $subject = 'Invitation From Bhoomi Classes';
    $message = 'Please Register by clicking following link http://bhoomi.pe.hu/entei/addStudent.html?id='.$lastId;
    $headers = 'From: cyborgsystems';
    if(mail($to_email,$subject,$message,$headers))
    echo "Y";
    else
    echo "N";
    
}




?>