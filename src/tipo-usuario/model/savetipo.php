<?php

   
    include('../../conexao/conn.php');

    
    $requestdata = $_REQUEST;

    
    if(empty($requestdata['descrição_usuario'])){
        
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        
        $id = isset($requestdata['idtipo_usuário']) ? $requestdata['idtipo_usuário'] : '';
        $operacao = isset($requestdata['operacao']) ? $requestdata['operacao'] : '';

        
        if($operacao == 'insert'){
            
            try{
                $stmt = $pdo->prepare('INSERT INTO tipo_usuário (descricao_usuario) VALUES (:a)');
                $stmt->execute(array(
                    ':a' => utf8_decode($requestdata['descricao_usuario'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Eixo tecnológico cadastrado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro do eixo.'
                );
            }
        } else {
            
            try{
                $stmt = $pdo->prepare('UPDATE tipo_usuário SET descrição_usuario = :a WHERE idtipo_usuário = :id');
                $stmt->execute(array(
                    ':id' => $ideixo,
                    ':a' => utf8_decode($requestdata['descrição_usuario'])
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