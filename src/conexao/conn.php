<?php

//variaveis
$hostname="sql200.epizy.com";
$dbname="epiz_28912886_library";
$username="epiz_28912886";
$password="3KwlAZYHVA";

try{
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname,$username,$password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo"conexão realizada com sucesso";
}
catch(PDOException $e){
    echo "error:".$e->getMessage();
}