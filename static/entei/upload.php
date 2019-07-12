<?php 
 header('Access-Control-Allow-Origin: *');  

 
include('db.php');
 
 
$info=json_decode( $_POST['info'] );

 


$sql="select  * from categories where name='$info->category' ";

$res=mysqli_query($con,$sql);
$cat=mysqli_fetch_array($res,MYSQLI_ASSOC);
 
$cat_id=$cat['cat_id'];

$insert_video="insert into videos (videos_title,videos_desc,videos_cat_id,videos_class) values('$info->vname','$info->desc',$cat_id,$info->class)";

if(mysqli_query($con,$insert_video))
    {
      $lastId=mysqli_insert_id($con);
      $target_dir = "../videos/";
      $path=$_FILES["file"]["name"];
      $ext=pathinfo($path, PATHINFO_EXTENSION);
     
       $target_file = $target_dir . basename($lastId.".". $ext);
        
       $url= $target_file;

      if(move_uploaded_file($_FILES["file"]["tmp_name"],$target_file))
        {
        $update_query="update videos set videos_url='$url' where videos_id=$lastId";
        mysqli_query($con, $update_query);
        }
 
     }
     else
     {
         echo "ERRR";
     }
 
 

 ?>
  
  