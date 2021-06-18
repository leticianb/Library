<?php

    
    include('../../conexao/conn.php');

    $id = $_REQUEST['idtipo_usuario'];
    $sql = "DELETE FROM tipo_usuario WHERE idtipo_usuario = $id";
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