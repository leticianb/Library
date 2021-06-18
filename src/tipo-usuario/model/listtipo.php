<?php

    
    include('../../conexao/conn.php');


    
    $requestData = $_REQUEST;

    
    $colunas = $requestData['columns'];

    
    $sql = "SELECT idtipo_usuario, descricao FROM tipo_usuario WHERE 1=1 ";

    
    $resultado = $pdo->query($sql);
    $qtdeLinhas = $resultado->rowCount();
    
    
    $filtro = $requestData['search']['value'];
    if( !empty( $filtro ) ){
        
        
        $sql .= " AND (idtipo_usuario LIKE '$filtro%' ";
        $sql .= " OR descricao LIKE '$filtro%') ";
    }
    
    
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