<?php

    
    include('../../conexao/conn.php');

   
    $dados = array();

    $sql = "SELECT * FROM tipo_usuario ORDER BY nome ASC";


    $resultado = $pdo->query($sql);

    if($resultado){
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $dados[] = array_map('utf8_encode', $row);
        }
    }

    echo json_encode($dados);