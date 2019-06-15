<?php
include('db.php');
$sql="select * from videos";
$res=mysqli_query($con,$sql);
$videos=array();
 while($row=mysqli_fetch_assoc($res))
    {
        $video_row=$row ;
        $cat_id=$row['videos_cat_id'];
        
        $cat_sql="select * from categories where cat_id=$cat_id";
        $cat_res=mysqli_query($con,$cat_sql)      ;
        $cat_row=mysqli_fetch_assoc($cat_res);
        
        $merged_array=array_merge($video_row,$cat_row);
        array_push($videos, $merged_array);
        
    }
     echo json_encode(array('videos'=>$videos));
    

?>