<?php

    
    include('../../conexao/conn.php');

    $id = $_REQUEST['idcurso'];
    $sql = "DELETE FROM curso WHERE idcurso = $id";
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