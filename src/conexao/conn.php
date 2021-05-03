<?php

//variaveis
$hostname="fdb29.awardspace.net";
$dbname="3799876_library";
$username="3799876_library";
$password="COM123ida@";

try{
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname,$username,$password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo"conexão realizada com sucesso";
}
catch(PDOException $e){
    echo "error:".$e->getMessage();
}