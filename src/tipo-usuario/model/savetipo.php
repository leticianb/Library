<?php

    include('../../conexao/conn.php');

    
    $requestdata = $_REQUEST;

    
    if(empty($requestdata['descricao'])){
        
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        
        $id = isset($requestdata['idtipo_usuario']) ? $requestdata['idtipo_usuario'] : '';
        $operacao = isset($requestdata['operacao']) ? $requestdata['operacao'] : '';

        
        if($operacao == 'insert'){
            
            try{
                $stmt = $pdo->prepare('INSERT INTO tipo_usuario (descricao) VALUES (:a)');
                $stmt->execute(array(
                    ':a' => utf8_decode($requestdata['descricao'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Tipo usuário cadastrado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro do eixo.'
                );
            }
        } else {
            
            try{
                $stmt = $pdo->prepare('UPDATE tipo_usuario SET descricao = :a WHERE idtipo_usuario = :id');
                $stmt->execute(array(
                    ':id' => $id,
                    ':a' => utf8_decode($requestdata['descricao'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Tipo usuário atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o alteração da descrição.'
                );
            }
        }
    }

    
    echo json_encode($dados);