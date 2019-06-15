<?php
   
include('db.php');
$sql=$_POST['sql'];
$op=1;
if(isset($_POST['op']))
        {
     $res=mysqli_query($con,$sql);
     
    if($res)
        {
    $op=0;        
    if(isset($_POST['get_sql']))
                {
                $op=1;
                $sql=$_POST['get_sql'];
                }    
        }    
    else
    echo "N";
 
        }
       
       if($op==1)
       {
$res=mysqli_query($con,$sql);

 
$arr=array();
while(($row=mysqli_fetch_assoc($res)) )
    {
        array_push($arr,$row);
    }
    
echo json_encode(array('res'=>$arr));

}


?>