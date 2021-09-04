<?php

    // Carregando o nosso banco de dados
    include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];

    // Criar uma variável para receber os dados coletados no banco
    $dados = array();

    // Criar uma querie de consulta ao banco de dados
    $sql = "SELECT * FROM usuario WHERE nome LIKE '%$nome%' ORDER BY nome ASC";

    // Executar a querie
    $resultado = $pdo->query($sql);

    // Testar o retorno da consulta
    if($resultado){
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $dados[] = array_map('utf8_encode', $row);
        }
    }

    // Retorno JSON
    echo json_encode($dados);