<?php
   
include('db.php');
$sql=$_POST['sql'];
 $op=0;
if(isset($_POST['op']))
        {
    $op=$_POST['op'];
     
    $res=mysqli_query($con,$sql);
     
    if($res)
    echo 'Y';
    else
    echo "N";
    return;

        }
        
$res=mysqli_query($con,$sql);

if($op==0)
{
$arr=array();
while(($row=mysqli_fetch_assoc($res)) )
    {
        array_push($arr,$row);
    }
    
echo json_encode(array('res'=>$arr));
}



?>