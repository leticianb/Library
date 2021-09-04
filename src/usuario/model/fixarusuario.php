<?php

    include('../../conexao/conn.php');

    $idusuario = $_REQUEST['idusuario'];

    $dados = array();

    $sql = "SELECT * FROM usuario WHERE idusuario LIKE '%$idusuario%'";

    $result = $pdo->query($sql);

    if ($result) {
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $dados[] = array_map('utf8_encode', $row);
        }
    }

    echo json_encode($dados);