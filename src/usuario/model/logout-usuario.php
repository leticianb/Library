<?php

    include('../../conexao/conn.php');

    $sql = $pdo->query("SELECT *, count(idusuario) as achou FROM usuario WHERE email = '".$_REQUEST['email']."' AND senha= '".md5($_REQUEST['senha'])."'");

    while ($resultado = $sql->fetch(PDO::FETCH_ASSOC)) {
        if($resultado['achou'] == 1){
            session_start();
            $_SESSION['idusuario'] = $resultado['idusuario'];
            $_SESSION['nome'] = $resultado['nome'];
            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Login correto!'
            );
        }else{
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Nome de usuário ou senha errado.'
            );
        }
    }

    echo json_encode($dados);