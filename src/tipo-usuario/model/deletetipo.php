<?php

    
    include('../../conexao/conn.php');

    $id = $_REQUEST['idtipo_usuário'];
    $sql = "DELETE FROM tipo_usuário WHERE idtipo_usuário = $id";
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