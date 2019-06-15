<?php
 header('Access-Control-Allow-Origin: *');  

include('db.php');
$sname=$_POST['sname'];
$uname=$_POST['uname'];
$upass=$_POST['upass'];
 
 $sql="insert into users (users_name,users_uname,users_password) values('$sname','$uname','$upass')";
 if(mysqli_query($con,$sql))
 echo "Y";
 else
 echo "N";



?>