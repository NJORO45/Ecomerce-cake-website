<?php
namespace phpexport;

const BASE_PATH = __DIR__.'../../';
require BASE_PATH.'/php/db-con.php';

class  export{
   
    public function getData($con,$table){
        $dataarray =array();
        $query = mysqli_query($con,"SELECT * FROM `$table`");
        if(mysqli_num_rows($query) > 0) {
            // Fetch all rows as an associative array
            while($rows = mysqli_fetch_array($query, MYSQLI_ASSOC)){
                $dataarray[]=$rows;
            }
            //return $dataarray;
        }
      return $dataarray;
        
    }
   
}
?>