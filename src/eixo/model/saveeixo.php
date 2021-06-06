<?php

   
    include('../../conexao/conn.php');

    
    $requestdata = $_REQUEST;

    
    if(empty($requestdata['nome'])){
        
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        
        $ideixo = isset($requestdata['ideixo']) ? $requestdata['ideixo'] : '';
        $operacao = isset($requestdata['operacao']) ? $requestdata['operacao'] : '';

        
        if($operacao == 'insert'){
            
            try{
                $stmt = $pdo->prepare('INSERT INTO eixo (nome) VALUES (:nome)');
                $stmt->execute(array(
                    ':nome' => utf8_decode($requestdata['nome'])
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
                $stmt = $pdo->prepare('UPDATE eixo SET nome = :nome WHERE ideixo = :id');
                $stmt->execute(array(
                    ':id' => $ideixo,
                    ':nome' => utf8_decode($requestdata['nome'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Eixo tecnológico atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o alteração do eixo.'
                );
            }
        }
    }

    
    echo json_encode($dados);