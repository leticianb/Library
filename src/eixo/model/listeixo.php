<?php

    
    include('../../conexao/conn.php');


    
    $requestData = $_REQUEST;

    //Obter as colunas vindas do resquest
    $colunas = $requestData['columns'];

    //Preparar o comando sql para obter os dados da categoria
    $sql = "SELECT ideixo, nome FROM eixo WHERE 1=1 ";

    //Obter o total de registros cadastrados
    $resultado = $pdo->query($sql);
    $qtdeLinhas = $resultado->rowCount();
    
    //Verificando se há filtro determinado
    $filtro = $requestData['search']['value'];
    if( !empty( $filtro ) ){
        //Montar a expressão lógica que irá compor os filtros
        //Aqui você deverá determinar quais colunas farão parte do filtro
        $sql .= " AND (ideixo LIKE '$filtro%' ";
        $sql .= " OR nome LIKE '$filtro%') ";
    }
    
    //Obter o total dos dados filtrados
    $resultado = $pdo->query($sql);
    $totalFiltrados = $resultado->rowCount();
    
    //Obter valores para ORDER BY      
    $colunaordem = $requestData['order'][0]['column']; //Obtém a posição da coluna na ordenação
    $ordem = $colunas[$colunaordem]['data']; //Obtém o nome da coluna para a ordenação
    $direcao = $requestData['order'][0]['dir']; //Obtém a direção da ordenação
    
    //Obter valores para o LIMIT
    $inicio = $requestData['start']; //Obtém o ínicio do limite
    $tamanho = $requestData['length']; //Obtém o tamanho do limite
    
    //Realizar o ORDER BY com LIMIT
    $sql .= " ORDER BY $ordem $direcao LIMIT $inicio, $tamanho ";
    $resultado = $pdo->query($sql);
    $dados = array();
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map('utf8_encode', $row);
    }
    //Monta o objeto json para retornar ao DataTable
    $json_data = array(
        "draw" => intval($requestData['draw']),
        "recordsTotal" => intval($qtdeLinhas),
        "recordsFiltered" => intval($totalFiltrados),
        "data" => $dados
    );



    
    echo json_encode($json_data);