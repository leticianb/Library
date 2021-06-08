<?php

    
    include('../../conexao/conn.php');

    $ideixo = $_REQUEST['ideixo'];
    $sql = "DELETE FROM eixo WHERE ideixo = $ideixo";
    $resultado = $pdo -> query($sql);
    if($resultado){
        $dados = array(
            'tipo' => 'success',
            'mensagem' =>'Registro excluído com sucesso'
        );
    }
    else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' =>'Não foi possível excluir o registro'
        );
    }

    echo json_encode($dados);